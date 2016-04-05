'use strict';
var EventEmitter = require('events');



module.exports = class mySpa extends EventEmitter{

    constructor(spaName,spaCountry){//ctor of spa
        super();
        this.spaName=spaName;
        this.spaCountry=spaCountry;
        this.ranking = 0;
        this.array=new Array();
    }
    printDetailsName(){//print name function
        console.log(`spaName:${this.spaName}`);
        this.array.push(`spaName:${this.spaName}`);
        this.emit("print");
    }
    printDetailsCountry(){//print country name function
        console.log(`spaCountry:${ this.spaCountry}`);
        this.array.push(`spaCountry:${ this.spaCountry}`);
        this.emit("print");
    }
    printRanking(){//print ranking function
        console.log(`ranking:${ this.ranking}`);
        this.array.push(`ranking:${ this.ranking}`);
    }
    addStar(star){
         this.ranking += star;
         this.emit("star"); 
         this.printRanking();
         if(this.ranking<0){
            this.notZero();
            }
    }
    deleteStar(star){
         this.ranking -= star;
         this.emit("star"); 
         this.printRanking(); 
          if(this.ranking<0){
            this.notZero();
            }  
    }
    notZero(){//check rank not 0
        console.log("bad reviews");
        this.array.push("bad reviews");
    }
}
