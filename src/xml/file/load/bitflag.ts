import {Bitflag} from "../../model/index";
import {loadOptions} from "./option";
import {getText} from "./text";

export function loadBitflag(bitflag: Element): Bitflag {
	return {
		name: bitflag.getAttribute("name")||"",
		storage: bitflag.getAttribute("storage")||"",
		description: getText(bitflag),
		options: loadOptions(bitflag),
	};
}
