package org.json;

import com.google.gwt.json.client.JSONBoolean;
import com.google.gwt.json.client.JSONNumber;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.json.client.JSONString;

public class JSONArray {
	
	com.google.gwt.json.client.JSONArray obj;
	
	public JSONArray() {
		obj = new com.google.gwt.json.client.JSONArray();
	}
	
	public com.google.gwt.json.client.JSONArray getGwtObj() {
		return obj;
	}
	
	public JSONArray put(JSONValue value) {
		obj.set(obj.size(), value);
		return this;
	}
	
	public JSONArray put(String value) {
		return put(new JSONString(value));
	}
	
	public JSONArray put(boolean value) {
		return put(JSONBoolean.getInstance(value));
	}
	
	public JSONArray put(int value) {
		return put(new JSONNumber(value));
	}
	
	public JSONArray put(float value) {
		return put(new JSONNumber(value));
	}
	
	public JSONArray put(double value) {
		return put(new JSONNumber(value));
	}
	
	public JSONArray put(JSONArray value) {
		return put(value.getGwtObj());
	}
	
	public JSONArray put(JSONObject value) {
		return put(value.getGwtObj());
	}

}
