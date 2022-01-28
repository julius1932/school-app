const fs = require('fs');

let routes = [];
const folders=[''];
do{
	const folder=folders.pop()
fs.readdirSync(__dirname+folder)
  .forEach((file) => {
    if(file.includes("Controller") && file.includes(".")){
       routes = routes.concat(require(`./${folder}/${file}`))
       //console.log(file)
  	}
    if(!file.includes(".")){
    	folders.push(`/${file}`);
    }
  });
}while(folders.length>0)

module.exports = routes;