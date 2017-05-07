import {Basic} from "../../model/index";
import {getText} from "./text";

export function loadBasic(basic: Element): Basic {
	return {
		name: basic.getAttribute("name")||"",
		count: +(basic.getAttribute("count")||"0"),
		nifLibType: basic.getAttribute("niflibtype")||"",
		nifSkopeType: basic.getAttribute("nifskopetype")||"",
		isTemplate: basic.hasAttribute("istemplate")
			? !!(basic.getAttribute("istemplate"))
			: undefined,
		description: getText(basic),
	};
}
