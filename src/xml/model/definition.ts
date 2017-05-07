import {Version} from "./version";
import {Basic} from "./basic";
import {Enum} from "./enum";
import {Bitflag} from "./bitflag";
import {Compound} from "./compound";
import {NiObject} from "./ni-object";

export type Definition = {
	versions: Version[],
	basics: Basic[],
	enums: Enum[],
	bitflags: Bitflag[],
	compounds: Compound[],
	objects: NiObject[],
}