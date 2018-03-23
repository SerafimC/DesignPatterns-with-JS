/* Ensure a class has only one instance and provide a global 
point of acess to ir*/

function Singleton() {
    var instance;

    Singleton = function() {
        return instance;
    };

    instance = this;
}

let inst = new Singleton();
console.log(inst === Singleton());