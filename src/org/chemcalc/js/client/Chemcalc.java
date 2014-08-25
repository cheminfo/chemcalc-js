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

@ExportPackage("CI")
@Export
public class Chemcalc implements Exportable {
	
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
	
}