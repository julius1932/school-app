const boom = require("boom");
const DB = require("../db");

exports.get = (model, query) =>
	new Promise(async function (resolve, reject) {
		try {
			const data = await DB[model].findAll(query);
			resolve(data);
		} catch (err) {
			reject(err);
		}
	});
exports.create = (model, payload) =>
	new Promise(async function (resolve, reject) {
		try {
			  console.log("\n\n\n\n =========================",payload)
			const data = await DB[model].create(payload);
			resolve(data);
		} catch (err) {
			reject(err);
		}
	});
exports.update = (model, query, payload) =>
	new Promise(async function (resolve, reject) {
		try {
			const data = await DB[model].update(payload, query);
			resolve(data);
		} catch (err) {
			reject(err);
		}
	});
exports.delete = (model, query) =>
	new Promise(async function (resolve, reject) {
		try {
			const data = await DB[model].destroy(query);
			resolve(data);
		} catch (err) {
			reject(err);
		}
	});
