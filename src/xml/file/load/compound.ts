import {Compound} from "../../model/index";
import {getText} from "./text";
import {loadFields} from "./field";

export function loadCompound(compound: Element): Compound {
	return {
		name: compound.getAttribute("name")||"",
		nifLibType: compound.getAttribute("niflibtype")||undefined,
		nifSkopeType: compound.getAttribute("nifskopetype")||undefined,
		ver1: compound.getAttribute("ver1")||undefined,
		ver2: compound.getAttribute("ver2")||undefined,
		vercond: compound.getAttribute("vercond")||undefined,
		description: getText(compound),
		isTemplate: !!(compound.getAttribute("istemplate") && compound.getAttribute("istemplate") === "1"),
		fields: loadFields(compound),
	};
}
