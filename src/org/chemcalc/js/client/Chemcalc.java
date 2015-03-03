package org.chemcalc.js.client;

import java.util.HashMap;

import org.chemcalc.core.LoadFromFiles;
import org.chemcalc.services.JSONForMF;
import org.chemcalc.services.GetInfo;
import org.chemcalc.services.MFFromMonoisotopicMass;
import org.json.JSONObject;

import com.google.gwt.core.client.JavaScriptException;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.core.client.js.JsExport;
import com.google.gwt.core.client.js.JsNamespace;
import com.google.gwt.core.client.js.JsType;

@JsType
@JsNamespace("$wnd.CI")
@JsExport
public class Chemcalc {

	private static JsArray<JavaScriptObject> aa = null;
	
	public static JavaScriptObject getInfo() {
		return JSONObjectToJSObject(GetInfo.execute(new HashMap<String, String>(), LoadFromFiles.groups(), LoadFromFiles.elements()));
	}

	public static JavaScriptObject analyseMF(String mf, JavaScriptObject options) {
		HashMap<String, String> mapOptions = convertToHashMap(options);
		mapOptions.put("mf", mf);
		return JSONObjectToJSObject(JSONForMF.execute(mapOptions,
				LoadFromFiles.groups(), LoadFromFiles.elements()));
	}

	public static JavaScriptObject mfFromMonoisotopicMass(double mass,
			JavaScriptObject options) {
		HashMap<String, String> mapOptions = convertToHashMap(options);
		mapOptions.put("monoisotopicMass", Double.toString(mass));
		return JSONObjectToJSObject(MFFromMonoisotopicMass.execute(mapOptions,
				LoadFromFiles.groups(), LoadFromFiles.elements()));
	}

	public static native String convertAASequence(String mf) /*-{
		// this function will check if it is a sequence of aa in 1 letter or 3 letters and convert them if it is the case
			// it could be a multiline mf !
			// if it is a multiline we could make some "tricks" ...
			var newmf=mf;
			// SEQRES   1 B  256  MET PRO VAL GLU ILE THR VAL LYS GLU LEU LEU GLU ALA          
			// SEQRES   2 B  256  GLY VAL HIS PHE GLY HIS GLU ARG LYS ARG TRP ASN PRO    
			// or
			// MET PRO VAL GLU ILE THR VAL LYS GLU LEU LEU GLU ALA          
			// GLY VAL HIS PHE GLY HIS GLU ARG LYS ARG TRP ASN PRO          
			if (mf.search(/[A-Z]{3} [A-Z]{3} [A-Z]{3}/)>-1) {
				// this is a PDB !
				var tmpmf=mf.replace(/[\r\n]+/g," ");
				tmpmf=tmpmf.replace(/(SEQRES|[0-9]+| [A-Z] | [0-9A-Z]{4-50})/g,"");
				// we need to correct the uppercase / lowercase
				var parts=tmpmf.split(" ");
				newmf="H";
				for (var i=0; i<parts.length; i++) {
					newmf+=parts[i].substr(0,1)+parts[i].substr(1).toLowerCase();
				}
				newmf+="OH";
			} else if ((mf.search(/[A-Z]{3}/)>-1) && (mf.search(/[a-zA-Z][a-z0-9]/)==-1)) {
				// UNIPROT
				//   370        380        390        400        410        420 
				//GFKPNLRKTF VSGLFRESCG AHFYRGVDVK PFYIKKPVDN LFALMLILNR LRGWGVVGGM 
				//
				//    430        440        450        460        470        480 
				//SDPRLYKVWV RLSSQVPSMF FGGTDLAADY YVVSPPTAVS VYTKTPYGRL LADTRTSGFR 
				// We remove all the number, all the spaces, etc
				newmf="H"+@org.chemcalc.js.client.Chemcalc::converAA1To3(Ljava/lang/String;)(newmf.replace(/[^A-Z]/g,""))+"OH";
			}
			return newmf;
	}-*/;

	// Private methods
	private static JavaScriptObject JSONObjectToJSObject(JSONObject json) {
		if (json.has("error")) {
			throw new JavaScriptException(json.getString("error"));
		} else {
			return json.getGwtObj().getJavaScriptObject();
		}
	}

	private static native HashMap<String, String> convertToHashMap(
			JavaScriptObject options) /*-{
		
		var hashmap = @java.util.HashMap::new()();
		
		if(options) {		
			for(var i in options) {
				hashmap.@java.util.HashMap::put(Ljava/lang/Object;Ljava/lang/Object;)(i, String(options[i]));
			}
		}
		
		return hashmap;
		
	}-*/;

	private static native JsArray<JavaScriptObject> getAA() /*-{
		if (@org.chemcalc.js.client.Chemcalc::aa == null) {
			@org.chemcalc.js.client.Chemcalc::aa = [ {
				id : 1,
				name : "alanine",
				aa3 : "Ala",
				aa1 : "A"
			}, {
				id : 2,
				name : "arginine",
				aa3 : "Arg",
				aa1 : "R"
			}, {
				id : 3,
				name : "asparagine",
				aa3 : "Asn",
				aa1 : "N"
			}, {
				id : 4,
				name : "aspartic acid",
				aa3 : "Asp",
				aa1 : "D"
			}, {
				id : 5,
				name : "asparagine or aspartic acid",
				aa3 : "Asx",
				aa1 : "B"
			}, {
				id : 6,
				name : "cysteine",
				aa3 : "Cys",
				aa1 : "C"
			}, {
				id : 7,
				name : "glutamic acid",
				aa3 : "Glu",
				aa1 : "E"
			}, {
				id : 8,
				name : "glutamine",
				aa3 : "Gln",
				aa1 : "Q"
			}, {
				id : 9,
				name : "glutamine or glutamic acid",
				aa3 : "Glx",
				aa1 : "Z"
			}, {
				id : 10,
				name : "glycine",
				aa3 : "Gly",
				aa1 : "G"
			}, {
				id : 11,
				name : "histidine",
				aa3 : "His",
				aa1 : "H"
			}, {
				id : 12,
				name : "isoleucine",
				aa3 : "Ile",
				aa1 : "I"
			}, {
				id : 13,
				name : "leucine",
				aa3 : "Leu",
				aa1 : "L"
			}, {
				id : 14,
				name : "lysine",
				aa3 : "Lys",
				aa1 : "K"
			}, {
				id : 15,
				name : "methionine",
				aa3 : "Met",
				aa1 : "M"
			}, {
				id : 16,
				name : "phenylalanine",
				aa3 : "Phe",
				aa1 : "F"
			}, {
				id : 17,
				name : "proline",
				aa3 : "Pro",
				aa1 : "P"
			}, {
				id : 18,
				name : "serine",
				aa3 : "Ser",
				aa1 : "S"
			}, {
				id : 19,
				name : "threonine",
				aa3 : "Thr",
				aa1 : "T"
			}, {
				id : 20,
				name : "tryptophan",
				aa3 : "Trp",
				aa1 : "W"
			}, {
				id : 21,
				name : "tyrosine",
				aa3 : "Tyr",
				aa1 : "Y"
			}, {
				id : 22,
				name : "valine",
				aa3 : "Val",
				aa1 : "V"
			} ]
		}
		return @org.chemcalc.js.client.Chemcalc::aa;
	}-*/;

	private static native String capitalizeAA3(String mf) /*-{
		var aa = @org.chemcalc.js.client.Chemcalc::getAA()();
		for (var i = 0; i < aa.length; i++) {
			var regexp = new RegExp(aa[i].aa3, "gi");
			mf = mf.replace(regexp, aa[i].aa3);
		}
		return mf;
	}-*/;

	private static native String converAA1To3(String mf) /*-{
		var newmf = "";
		for (var i = 0; i < mf.length; i++) {
			newmf += @org.chemcalc.js.client.Chemcalc::aa1To3(Ljava/lang/String;)(mf.charAt(i));
		}
		return newmf;
	}-*/;

	private static native String aa1To3(String code) /*-{
		var aa = @org.chemcalc.js.client.Chemcalc::getAA()();
		for (var i=0; i<aa.length; i++) {
			if (aa[i].aa1==code) {
				return aa[i].aa3;
			}
		}
		return code;
	}-*/;
	
	public static native String chargePeptide(String mf) /*-{
		return mf.replace(/^H([^+])/,"H+H$1").replace(/(Arg|His|Lys)(?!\()/g,"$1(H+)");
	}-*/;
	
	public static native String generatePeptideFragments(String mf, JavaScriptObject options) /*-{
		if (! options) options={a:false, b:true, c:false, x:false, y:true, z:false};
		var mfs=[];
		var mfparts=mf.replace(/([a-z\)])([A-Z])/g,"$1 $2").split(/ /);

		if (options.a) {
			var mfa="";
			for (var i=0; i<(mfparts.length-1); i++) {
				mfa+=mfparts[i];
				mfs.push(mfa+"C-1O-1(+1)$a"+(i+1));
			}
		}
		if (options.b) {
			var mfb="";
			for (var i=0; i<(mfparts.length-1); i++) {
				mfb+=mfparts[i];
					mfs.push(mfb+"(+1)$b"+(i+1));
			}
		}
		if (options.c) {
			var mfc="";
			for (var i=0; i<(mfparts.length-1); i++) {
				mfc+=mfparts[i];
				mfs.push(mfc+"NH3(+1)$c"+(i+1));
			}
		}
		if (options.x) {
			var mfx="";
			for (var i=mfparts.length-1; i>=0; i--) {
				mfx=mfparts[i]+mfx;
				if (i<(mfparts.length-1)) {
					mfs.push("CO(+1)"+mfx+"$x"+(mfparts.length-i-1));
				}
			}
		}
		if (options.y) {
			var mfy="";
			for (var i=mfparts.length-1; i>=0; i--) {
				mfy=mfparts[i]+mfy;
				if (i<(mfparts.length-1)) {
					mfs.push("H2(+1)"+mfy+"$y"+(mfparts.length-i-1));
				}
			}
		}
		if (options.z) {
			var mfz="";
			for (var i=mfparts.length-1; i>=0; i--) {
				mfz=mfparts[i]+mfz;
				if (i<(mfparts.length-1)) {
					mfs.push("N-1H-1(+1)"+mfz+"$z"+(mfparts.length-i-1));
				}
			}
		}
		if (options.i) {
			for (var i=mfparts.length-1; i>0; i--) {
				if (mfparts[i].match(/^[A-Z][a-z][a-z].*$/)) {
					mfs.push(mfparts[i]+"HC-1O-1(+1)$i:"+mfparts[i]);
				}
			}
		}

		if (mfs.length==0) mfs=mfs.concat([mf]);
			return mfs;

	}-*/;
	
}
