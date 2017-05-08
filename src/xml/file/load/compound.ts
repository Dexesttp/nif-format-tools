import {Compound} from "../../model/index";
import {getText} from "./text";
import {loadFields} from "./field";

export function loadCompound(compound: Element): Compound {
	return {
		name: compound.getAttribute("name")||"",
		nifLibType: compound.getAttribute("niflibtype")||undefined,
		nifSkopeType: compound.getAttribute("nifskopetype")||undefined,
		minimum_version: compound.getAttribute("ver1")||undefined,
		maximum_version: compound.getAttribute("ver2")||undefined,
		version_conditional_expression: compound.getAttribute("vercond")||undefined,
		description: getText(compound),
		isTemplate: compound.hasAttribute("istemplate") ? compound.getAttribute("istemplate")==="1" : undefined,
		fields: loadFields(compound),
	};
}
