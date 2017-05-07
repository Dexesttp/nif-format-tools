import {Field} from "../../model/index";
import {select} from "xpath";
import {getText} from "./text";

export function loadField(field: Element): Field {
	return {
		name: field.getAttribute("name") || "",
		type: field.getAttribute("type") || "",
		ver1: field.hasAttribute("ver1") ? field.getAttribute("ver1")||"" : undefined,
		ver2: field.hasAttribute("ver2") ? field.getAttribute("ver2")||"" : undefined,
		vercond: field.hasAttribute("vercond") ? field.getAttribute("vercond")||"" : undefined,
		arr1: field.hasAttribute("arr1") ? field.getAttribute("arr1")||"" : undefined,
		arr2: field.hasAttribute("arr2") ? field.getAttribute("arr2")||"" : undefined,
		binary: field.hasAttribute("binary") ? field.getAttribute("binary")==="1" : undefined,
		condition: field.hasAttribute("cond") ? field.getAttribute("cond")||"" : undefined,
		template: field.hasAttribute("template") ? field.getAttribute("template")||"" : undefined,
		default: field.hasAttribute("default") ? field.getAttribute("default")||"" : undefined,
		description: getText(field),
	};
}

export function loadFields(node: Element): Field[] {
	return select("add", node).map(loadField);
}
