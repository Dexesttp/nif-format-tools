import {getText} from "./text";
import {loadOptions} from "./option";
import {Enum} from "../../model/index";

export function loadEnum(enumElement: Element): Enum {
	return {
		name: enumElement.getAttribute("name")||"",
		storage: enumElement.getAttribute("storage")||"",
		ver1: enumElement.hasAttribute("ver1") ? enumElement.getAttribute("ver1")||"" : undefined,
		ver2: enumElement.hasAttribute("ver2") ? enumElement.getAttribute("ver2")||"" : undefined,
		vercond: enumElement.hasAttribute("vercond") ? enumElement.getAttribute("vercond")||"" : undefined,
		description: getText(enumElement),
		options: loadOptions(enumElement),
	};
}
