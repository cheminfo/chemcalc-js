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
				LoadFromFiles.groups(mapOptions.get("groups")), LoadFromFiles.elements()));
	}

	public static JavaScriptObject mfFromMonoisotopicMass(double mass,
			JavaScriptObject options) {
		HashMap<String, String> mapOptions = convertToHashMap(options);
		mapOptions.put("monoisotopicMass", Double.toString(mass));
		return JSONObjectToJSObject(MFFromMonoisotopicMass.execute(mapOptions,
				LoadFromFiles.groups(mapOptions.get("groups")), LoadFromFiles.elements()));
	}



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
	
}
