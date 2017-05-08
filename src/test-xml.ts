import {DOMParser} from "xmldom";
import {select} from "xpath";

function cleanNode(nodeElement: Element) {
	const text = select("text()", nodeElement).join("").trim();
	const nodes = select("*", nodeElement).map<Node>((childNode: Node) => childNode.cloneNode(true));
	if(text) {
		nodeElement.textContent = text;
		for(let childNode of nodes) {
			nodeElement.appendChild(childNode);
		}
	}
}

export function getTestXml(xml: Document): Document {
	const document = (new DOMParser()).parseFromString("<niftoolsxml />", "");
	const root = document.getElementsByTagName("niftoolsxml")[0];

	for(let version of select("/niftoolsxml/version", xml)) {
		const versionElement = document.importNode(version as Node, true);
		root.appendChild(versionElement);
	}
	
	for(let basic of select("/niftoolsxml/basic", xml)) {
		const basicElement = document.importNode(basic as Node, true);
		root.appendChild(basicElement);
	}
	
	for(let enumValue of select("/niftoolsxml/enum", xml)) {
		const enumElement = document.importNode(enumValue as Node, true);
		root.appendChild(enumElement);
	}
	
	for(let bitflag of select("/niftoolsxml/bitflags", xml)) {
		const bitflagElement = document.importNode(bitflag as Node, true);
		root.appendChild(bitflagElement);
	}
	
	for(let compound of select("/niftoolsxml/compound", xml)) {
		const compoundElement = document.importNode(compound as Node, true);
		root.appendChild(compoundElement);
	}
	
	for(let objectValue of select("/niftoolsxml/niobject", xml)) {
		const objectElement = document.importNode(objectValue as Node, true);
		root.appendChild(objectElement);
	}

	for(let node of select("/niftoolsxml/*", document)) {
		const nodeElement = node as Element;
		if(!nodeElement)
			continue;
		cleanNode(nodeElement);
	}

	for(let node of select("/niftoolsxml/*/*", document)) {
		const nodeElement = node as Element;
		if(!nodeElement)
			continue;
		cleanNode(nodeElement);
	}

	return document;
}