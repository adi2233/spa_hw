'use strict';
var http = require('http'); 
var EventEmitter = require('events');
var spa = require('./spa');

http.createServer(function(req,res){

var Spa = new spa('sea spa','USA');//create spa refernce

Spa.on("star",function(){//call back function
    console.log("change star ranking");
});

Spa.on("print",function(){//call back function
    console.log("Spa detailes");
});

Spa.printDetailsName();//call function print spa name
Spa.printDetailsCountry();// call function print country name
Spa.printRanking();//call print function

Spa.addStar(1);//add star to ranking
Spa.deleteStar(2);//delete star from ranking

res.write(Spa.array.toString());//print array
res.end();

}).listen(8080);//port 8080
 
