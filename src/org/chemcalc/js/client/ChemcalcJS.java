package org.chemcalc.js.client;

import org.timepedia.exporter.client.ExporterUtil;

import com.google.gwt.core.client.EntryPoint;

public class ChemcalcJS implements EntryPoint {

	@Override
	public void onModuleLoad(){
		ExporterUtil.exportAll();
	}

}
