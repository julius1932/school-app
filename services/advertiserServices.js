const boom = require('boom');
const {Advertiser} = require('../db');



const table="Advertiser";

exports.get = (query) =>  new Promise(async function(resolve, reject) {
	try{
		const data= await Advertiser.findAll(query);
        resolve(data)
	}catch(err){
		reject(err)
	} 
	
});
exports.create = (payload) =>  new Promise(async function(resolve, reject) {
	console.log("pppppppppppppppp");
	try{
		const data= await Advertiser.create(payload);
        resolve(data)
	}catch(err){
		console.log(err)
		reject(err)
	}
	
});
exports.update = (query,payload) =>  new Promise(async function(resolve, reject) {
	try{
		const data= await Advertiser.update(payload,query);
        resolve(data)
	}catch(err){
		reject(err)
	}
	
});
exports.delete = (query) =>  new Promise(async function(resolve, reject) {
	try{
		const data= await Advertiser.destroy(query);
        resolve(data)
	}catch(err){
		reject(err)
	}
	
});
