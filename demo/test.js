function lg(...props){
    var a = 0;
   return  console.log(...props,a++)


}

function fn(){}

const obj = new fn(); 

lg( obj.__proto__ === fn  )  //false


lg(obj.__proto__===fn.prototype)//true
lg(fn.prototype.constructor=obj)//false   fn

// lg(fn instanceof obj )//error


lg(obj instanceof fn)//true


lg(obj instanceof Function) //false

lg( fn instanceof Object) //true