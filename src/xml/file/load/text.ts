import {select} from "xpath";

export function getText(node: Element): string {
	return select("text()", node).join("").trim();
}
