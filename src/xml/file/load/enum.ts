import {getText} from "./text";
import {loadOptions} from "./option";
import {Enum} from "../../model/index";

export function loadEnum(enumElement: Element): Enum {
	return {
		name: enumElement.getAttribute("name")||"",
		storage: enumElement.getAttribute("storage")||"",
		minimum_version: enumElement.getAttribute("ver1")||undefined,
		maximum_version: enumElement.getAttribute("ver2")||undefined,
		version_conditional_expression: enumElement.getAttribute("vercond")||undefined,
		description: getText(enumElement),
		options: loadOptions(enumElement),
	};
}
