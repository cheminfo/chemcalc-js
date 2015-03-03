package org.json;

import java.math.BigInteger;

import org.chemcalc.core.FormulaPart;

import com.google.gwt.json.client.JSONBoolean;
import com.google.gwt.json.client.JSONNull;
import com.google.gwt.json.client.JSONNumber;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.json.client.JSONString;

public class JSONObject {
	
	com.google.gwt.json.client.JSONObject obj;
	
	public JSONObject() {
		obj = new com.google.gwt.json.client.JSONObject();
	}
	
	public String getString(String key) {
		return obj.get(key).isString().stringValue();
	}
	
	public boolean has(String key) {
		return obj.containsKey(key);
	}
	
	public JSONObject put(String key, String value) {
		if(value == null) {
			return putNull(key);
		} else {
			return put(key, new JSONString(value));
		}
	}
	
	public JSONObject put(String key, Double value) {
		if(value == null) {
			return putNull(key);
		} else {
			return put(key, value.doubleValue());
		}
	}
	
	public JSONObject put(String key, Integer value) {
		if(value == null) {
			return putNull(key);
		} else {
			return put(key, value.intValue());
		}
	}
	
	public JSONObject put(String key, Float value) {
		if(value == null) {
			return putNull(key);
		} else {
			return put(key, value.floatValue());
		}
	}
	
	public JSONObject put(String key, int value) {
		return put(key, new JSONNumber(value));
	}
	
	public JSONObject put(String key, float value) {
		return put(key, new JSONNumber(value));
	}
	
	public JSONObject put(String key, double value) {
		return put(key, new JSONNumber(value));
	}
	
	public JSONObject put(String key, boolean value) {
		return put(key, JSONBoolean.getInstance(value));
	}
	
	public JSONObject put(String key, JSONArray value) {
		return put(key, value.getGwtObj());
	}
	
	public JSONObject put(String key, JSONObject value) {
		return put(key, value.getGwtObj());
	}
	
	public JSONObject put(String key, FormulaPart part) {
		return put(key, part.toString());
	}
	
	public JSONObject put(String key, BigInteger part) {
		return put(key, part.doubleValue());
	} 
	
	public com.google.gwt.json.client.JSONObject getGwtObj() {
		return obj;
	}
	
	private JSONObject put(String key, JSONValue value) {
		obj.put(key, value);
		return this;
	}
	
	private JSONObject putNull(String key) {
		return put(key, JSONNull.getInstance());
	}
	
}
