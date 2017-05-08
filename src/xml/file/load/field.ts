import {Field} from "../../model/index";
import {select} from "xpath";
import {getText} from "./text";

export function loadField(field: Element): Field {
	return {
		name: field.getAttribute("name")||"",
		type: field.getAttribute("type")||"",
		match_version: field.getAttribute("ver")||undefined,
		minimum_version: field.getAttribute("ver1")||undefined,
		maximum_version: field.getAttribute("ver2")||undefined,
		version_conditional_expression: field.getAttribute("vercond")||undefined,
		match_user_version: field.getAttribute("userver")||undefined,
		match_user_version_2: field.getAttribute("userver2")||undefined,
		arr1: field.getAttribute("arr1")||undefined,
		arr2: field.getAttribute("arr2")||undefined,
		arg: field.getAttribute("arg")||undefined,
		abstract: field.hasAttribute("abstract") ? field.getAttribute("abstract")==="1" : undefined,
		binary: field.hasAttribute("binary") ? field.getAttribute("binary")==="1" : undefined,
		calculated: field.hasAttribute("calculated") ? field.getAttribute("calculated")==="1" : undefined,
		condition: field.getAttribute("cond")||undefined,
		template: field.getAttribute("template")||undefined,
		default: field.getAttribute("default")||undefined,
		description: getText(field),
	};
}

export function loadFields(node: Element): Field[] {
	return select("add", node).map(loadField);
}
