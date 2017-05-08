import {NiObject} from "../../model/index";
import {loadFields} from "./field";
import {getText} from "./text";

export function loadObject(niobject: Element): NiObject {
	return {
		name: niobject.getAttribute("name")||"",
		nifLibType: niobject.getAttribute("niflibtype")||undefined,
		nifSkopeType: niobject.getAttribute("nifskopetype")||undefined,
		minimum_version: niobject.getAttribute("ver1")||undefined,
		maximum_version: niobject.getAttribute("ver2")||undefined,
		version_conditional_expression: niobject.getAttribute("vercond")||undefined,
		description: getText(niobject),
		abstract: niobject.hasAttribute("abstract") ? niobject.getAttribute("abstract")==="1" : undefined,
		inherit: niobject.getAttribute("inherit")||undefined,
		fields: loadFields(niobject),
	};
}
