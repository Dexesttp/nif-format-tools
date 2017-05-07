import {Version} from "../../model/index";
import {getText} from "./text";

export function loadVersion(version: Element): Version {
	return {
		num: version.getAttribute("num")||"",
		description: getText(version),
	};
}
