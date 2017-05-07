import {Definition} from "../xml/model/definition";

export function checkoutVersion(model: Definition, version: string): Definition {
	return {
		versions: model.versions.filter(v => v.num === version),
		basics: model.basics,
		bitflags: model.bitflags,
		enums: model.enums,
		compounds: model.compounds,
		objects: model.objects
	}
}