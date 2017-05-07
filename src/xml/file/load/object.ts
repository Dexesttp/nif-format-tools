import {NiObject} from "../../model/index";
import {loadFields} from "./field";
import {getText} from "./text";

export function loadObject(niobject: Element): NiObject {
	return {
		name: niobject.getAttribute("name")||"",
		nifLibType: niobject.getAttribute("niflibtype")||undefined,
		nifSkopeType: niobject.getAttribute("nifskopetype")||undefined,
		ver1: niobject.getAttribute("ver1")||undefined,
		ver2: niobject.getAttribute("ver2")||undefined,
		vercond: niobject.getAttribute("vercond")||undefined,
		description: getText(niobject),
		abstract: !!(niobject.getAttribute("abstract") && niobject.getAttribute("abstract") === "1"),
		inherit: niobject.getAttribute("inherit")||undefined,
		fields: loadFields(niobject),
	};
}
