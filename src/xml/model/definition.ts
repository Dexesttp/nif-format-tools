import {Version} from "./version";
import {Basic} from "./basic";
import {Enum} from "./enum";
import {Bitflag} from "./bitflag";
import {Compound} from "./compound";
import {NiObject} from "./ni-object";

/** Represents a `nif.xml` or `nif.json` definition file. */
export interface Definition {
	/** The version handled by this definition file */
	versions: Version[];
	/** The basic types used in this definition file */
	basics: Basic[];
	/** The enumerations used in this definition file */
	enums: Enum[];
	/** The bitflags used in this definition file */
	bitflags: Bitflag[];
	/** The compounds used in this definition file */
	compounds: Compound[];
	/** The objects described in a Nif file for the handled versions */
	objects: NiObject[];
}
