const get = require("./get");
const create = require("./create");
const delet = require("./delete");
const update = require("./update");

const baseURL = "school";
module.exports = [
    { method: "GET", path: `/${baseURL}`, config: get },
    { method: ["POST"], path: `/${baseURL}`, config: create },
    { method: ["PUT"], path: `/${baseURL}`, config: update },
    { method: "DELETE", path: `/${baseURL}/{id}`, config: delet },
];
