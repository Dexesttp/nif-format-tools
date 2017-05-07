import {DOMParser, DOMImplementation} from "xmldom";
import {Definition, Field} from "../model/index";

function writeField(document: Document, parent: Element, field: Field) {
	const optionElement = document.createElement("add");
	optionElement.setAttribute("name", field.name);
	optionElement.setAttribute("type", field.type);
	if(field.ver1 !== undefined)
		optionElement.setAttribute("ver1", field.ver1);
	if(field.ver2 !== undefined)
		optionElement.setAttribute("ver2", field.ver2);
	if(field.vercond !== undefined)
		optionElement.setAttribute("vercond", field.vercond);
	if(field.condition !== undefined)
		optionElement.setAttribute("cond", field.condition);
	if(field.binary !== undefined)
		optionElement.setAttribute("binary", field.binary ? "1" : "0");
	if(field.arr1 !== undefined)
		optionElement.setAttribute("arr1", field.arr1);
	if(field.arr2 !== undefined)
		optionElement.setAttribute("arr2", field.arr2);
	if(field.template !== undefined)
		optionElement.setAttribute("template", field.template);
	if(field.default !== undefined)
		optionElement.setAttribute("default", field.default);
	optionElement.textContent = field.description||"";
	parent.appendChild(optionElement);
}

export function save(data: Definition) : Document {
	const document = (new DOMParser()).parseFromString("<niftoolsxml />", "");
	const root = document.getElementsByTagName("niftoolsxml")[0];

	for(let version of data.versions) {
		const versionElement = document.createElement("version");
		versionElement.setAttribute("num", version.num);
		versionElement.textContent = version.description;
		root.appendChild(versionElement);
	}
	
	for(let basic of data.basics) {
		const basicElement = document.createElement("basic");
		basicElement.setAttribute("name", basic.name);
		basicElement.setAttribute("count", `${basic.count}`);
		basicElement.setAttribute("niflibtype", basic.nifLibType);
		basicElement.setAttribute("nifskopetype", basic.nifSkopeType);
		if(basic.isTemplate !== undefined)
			basicElement.setAttribute("istemplate", basic.isTemplate ? "1" : "0");
		basicElement.textContent = basic.description;
		root.appendChild(basicElement);
	}
	
	for(let enumValue of data.enums) {
		const enumElement = document.createElement("enum");
		enumElement.setAttribute("name", enumValue.name);
		enumElement.setAttribute("storage", `${enumValue.storage}`);
		enumElement.textContent = enumValue.description;
		for(let optionValue of enumValue.options) {
			const optionElement = document.createElement("option");
			optionElement.setAttribute("value", `${optionValue.value}`);
			optionElement.setAttribute("name", optionValue.name);
			optionElement.textContent = optionValue.description;
			enumElement.appendChild(optionElement);
		}
		root.appendChild(enumElement);
	}
	
	for(let enumValue of data.bitflags) {
		const enumElement = document.createElement("bitflags");
		enumElement.setAttribute("name", enumValue.name);
		enumElement.setAttribute("storage", `${enumValue.storage}`);
		enumElement.textContent = enumValue.description;
		for(let optionValue of enumValue.options) {
			const optionElement = document.createElement("option");
			optionElement.setAttribute("value", `${optionValue.value}`);
			optionElement.setAttribute("name", optionValue.name);
			optionElement.textContent = optionValue.description;
			enumElement.appendChild(optionElement);
		}
		root.appendChild(enumElement);
	}
	
	for(let compound of data.compounds) {
		const compoundElement = document.createElement("compound");
		compoundElement.setAttribute("name", compound.name);
		if(compound.nifLibType !== undefined)
			compoundElement.setAttribute("niflibtype", compound.nifLibType);
		if(compound.nifSkopeType !== undefined)
			compoundElement.setAttribute("nifskopetype", compound.nifSkopeType);
		if(compound.ver1 !== undefined)
			compoundElement.setAttribute("ver1", compound.ver1);
		if(compound.ver2 !== undefined)
			compoundElement.setAttribute("ver2", compound.ver2);
		if(compound.vercond !== undefined)
			compoundElement.setAttribute("vercond", compound.vercond);
		if(compound.isTemplate !== undefined)
			compoundElement.setAttribute("istemplate", compound.isTemplate ? "1" : "0");
		compoundElement.textContent = compound.description;
		for(let field of compound.fields)
			writeField(document, compoundElement, field);
		root.appendChild(compoundElement);
	}
	
	for(let compound of data.objects) {
		const compoundElement = document.createElement("niobject");
		compoundElement.setAttribute("name", compound.name);
		if(compound.nifLibType !== undefined)
			compoundElement.setAttribute("niflibtype", compound.nifLibType);
		if(compound.nifSkopeType !== undefined)
			compoundElement.setAttribute("nifskopetype", compound.nifSkopeType);
		if(compound.ver1 !== undefined)
			compoundElement.setAttribute("ver1", compound.ver1);
		if(compound.ver2 !== undefined)
			compoundElement.setAttribute("ver2", compound.ver2);
		if(compound.vercond !== undefined)
			compoundElement.setAttribute("vercond", compound.vercond);
		if(compound.abstract !== undefined)
			compoundElement.setAttribute("abstract", compound.abstract ? "1" : "0");
		if(compound.inherit !== undefined)
			compoundElement.setAttribute("inherit", compound.inherit);
		compoundElement.textContent = compound.description;
		for(let field of compound.fields)
			writeField(document, compoundElement, field);
		root.appendChild(compoundElement);
	}

	return document;
}