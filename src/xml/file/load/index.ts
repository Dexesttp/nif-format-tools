import {select} from "xpath";
import {Definition} from "../../model/index";
import {loadVersion} from "./version";
import {loadBasic} from "./basic";
import {loadEnum} from "./enum";
import {loadBitflag} from "./bitflag";
import {loadCompound} from "./compound";
import {loadObject} from "./object";

export function load(doc: Document): Definition {
	return {
		versions: select("/niftoolsxml/version", doc).map(loadVersion),
		basics: select("/niftoolsxml/basic", doc).map(loadBasic),
		enums: select("/niftoolsxml/enum", doc).map(loadEnum),
		bitflags: select("/niftoolsxml/bitflags", doc).map(loadBitflag),
		compounds: select("/niftoolsxml/compound", doc).map(loadCompound),
		objects: select("/niftoolsxml/niobject", doc).map(loadObject),
	};
}
