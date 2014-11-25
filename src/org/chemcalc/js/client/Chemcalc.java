package org.chemcalc.js.client;

import java.util.HashMap;

import org.chemcalc.core.LoadFromFiles;
import org.chemcalc.services.JSONForMF;
import org.chemcalc.services.MFFromMonoisotopicMass;
import org.json.JSONObject;
import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;

@ExportPackage("CI")
@Export
public class Chemcalc implements Exportable {
	
	private static JsArray<JavaScriptObject> aa = null;
	
	@Export
	public static JavaScriptObject analyseMF(String mf, JavaScriptObject options) {
		HashMap<String, String> mapOptions = convertToHashMap(options);
		mapOptions.put("mf", mf);
		return JSONObjectToJSObject(JSONForMF.execute(mapOptions, LoadFromFiles.groups(), LoadFromFiles.elements()));
	}
	
	@Export
	public static JavaScriptObject mfFromMonoisotopicMass(double mass, JavaScriptObject options) {
		HashMap<String, String> mapOptions = convertToHashMap(options);
		mapOptions.put("monoisotopicMass", Double.toString(mass));
		return JSONObjectToJSObject(MFFromMonoisotopicMass.execute(mapOptions, LoadFromFiles.groups(), LoadFromFiles.elements()));
	}
	
	//Private methods
	private static JavaScriptObject JSONObjectToJSObject(JSONObject json) {
		return json.getGwtObj().getJavaScriptObject();
	}
	
	private static native HashMap<String, String> convertToHashMap(JavaScriptObject options) /*-{
		
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
			@org.chemcalc.js.client.Chemcalc::aa =  [
				{id:1, name:"alanine", aa3:"Ala", aa1:"A"},
				{id:2, name:"arginine", aa3:"Arg", aa1:"R"},
				{id:3, name:"asparagine", aa3:"Asn", aa1:"N"},
				{id:4, name:"aspartic acid", aa3:"Asp", aa1:"D"},
				{id:5, name:"asparagine or aspartic acid", aa3:"Asx", aa1:"B"},
				{id:6, name:"cysteine", aa3:"Cys", aa1:"C"},
				{id:7, name:"glutamic acid", aa3:"Glu", aa1:"E"},
				{id:8, name:"glutamine", aa3:"Gln", aa1:"Q"},
				{id:9, name:"glutamine or glutamic acid", aa3:"Glx", aa1:"Z"},
				{id:10, name:"glycine", aa3:"Gly", aa1:"G"},
				{id:11, name:"histidine", aa3:"His", aa1:"H"},
				{id:12, name:"isoleucine", aa3:"Ile", aa1:"I"},
				{id:13, name:"leucine", aa3:"Leu", aa1:"L"},
				{id:14, name:"lysine", aa3:"Lys", aa1:"K"},
				{id:15, name:"methionine", aa3:"Met", aa1:"M"},
				{id:16, name:"phenylalanine", aa3:"Phe", aa1:"F"},
				{id:17, name:"proline", aa3:"Pro", aa1:"P"},
				{id:18, name:"serine", aa3:"Ser", aa1:"S"},
				{id:19, name:"threonine", aa3:"Thr", aa1:"T"},
				{id:20, name:"tryptophan", aa3:"Trp", aa1:"W"},
				{id:21, name:"tyrosine", aa3:"Tyr", aa1:"Y"},
				{id:22, name:"valine", aa3:"Val", aa1:"V"}
			]
		}
		return @org.chemcalc.js.client.Chemcalc::aa;
	}-*/;
	
	private static native String capitalizeAA3(String mf) /*-{
	var aa = @org.chemcalc.js.client.Chemcalc::getAA();
	for (var i=0; i<aa.length; i++) {
		var regexp=new RegExp(aa[i].aa3,"gi");
		mf=mf.replace(regexp, aa[i].aa3);
	}
	return mf;
}-*/;
	
}