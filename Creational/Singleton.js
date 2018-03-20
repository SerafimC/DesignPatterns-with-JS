function Singleton() {
    var instance;

    Singleton = function() {
        return instance;
    };

    instance = this;
}

let inst = new Singleton();
console.log(inst === Singleton());