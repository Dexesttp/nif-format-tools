import * as path from "path";
import * as fs from "fs";
import * as xpath from "xpath";
import * as constants from "./constants";
import {DOMParser, XMLSerializer} from "xmldom";
import {load, save} from "./xml/file";
import {getTestXml} from "./test-xml";
import {Definition} from "./xml/model/index";
const beautify = require("xml-beautifier");

function getUnusedCompounds(data: Definition) {
	let newCompounds = data.objects.reduce<string[]>((prev, o) => prev
		.concat(o.fields.map(f => f.type))
		.concat(o.fields.filter(f => f.template).map(f => f.template||""))
	, []).concat("Header").concat("Footer");
	let usedCompounds: string[] = [];
	while(newCompounds.length > 0) {
		usedCompounds = usedCompounds.concat(newCompounds);
		newCompounds = data.compounds
			.filter(c => newCompounds.some(n => n === c.name))
			.reduce<string[]>((prev, c) => prev
				.concat(c.fields.map(f => f.type))
				.concat(c.fields.filter(f => f.template).map(f => f.template||""))
		, []).filter(n => !usedCompounds.some(c => c === n));
	}
	return data.compounds.filter(c => !usedCompounds.some(n => n === c.name)).map(c => c.name);
}

function exportData(data: Definition) {
	const newXml = save(data);
	const xmlText = (new XMLSerializer()).serializeToString(newXml);
	const prettyXmlText = beautify(xmlText);
	if (!fs.existsSync(path.resolve(__dirname, constants.outFolder)))
		fs.mkdirSync(path.resolve(__dirname, constants.outFolder));
	fs.unlink(path.resolve(__dirname, constants.outJsonPath), () => {
		fs.writeFile(path.resolve(__dirname, constants.outJsonPath), JSON.stringify(data, undefined, 4));
	});
	fs.unlink(path.resolve(__dirname, constants.outXmlPath), () => {
		fs.writeFile(path.resolve(__dirname, constants.outXmlPath), xmlText);
	});
	fs.unlink(path.resolve(__dirname, constants.prettyOutXmlPath), () => {
		fs.writeFile(path.resolve(__dirname, constants.prettyOutXmlPath), prettyXmlText);
	});
}

function exportTest(xml: Document) {
	const testXml = getTestXml(xml);
	const prettyTestXml = beautify((new XMLSerializer()).serializeToString(testXml));
	fs.unlink(path.resolve(__dirname, constants.testXmlPath), () => {
		fs.writeFile(path.resolve(__dirname, constants.testXmlPath), prettyTestXml);
	});
}

fs.readFile(path.resolve(__dirname, constants.inXmlPath), (err, rawXml) => {
	if(err) {
		console.error(err);
		return;
	}
	const xml = new DOMParser().parseFromString(rawXml.toString("utf-8"), "text/xml");
	const data = load(xml);
	exportData(data);
	exportTest(xml);
});
