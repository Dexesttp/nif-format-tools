import {select} from "xpath";
import {Option} from "../../model/index";
import {getText} from "./text";

export function loadOption(option: Element): Option {
	return {
		name: option.getAttribute("name")||"",
		value: +(option.getAttribute("value")||""),
		description: getText(option),
	};
}

export function loadOptions(node: Element): Option[] {
	return select("option", node).map(loadOption);
}
