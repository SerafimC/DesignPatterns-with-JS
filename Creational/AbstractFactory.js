/* Provide an interface for creating families of related or 
dependent objects without specifying their concrete classes */

function Employee(name) {
    this.name = name;

    this.say = function() {
        log.add("I am employee " + name);
    };
}

function EmployeeFactory() {

    this.create = function(name) {
        return new Employee(name);
    }
}

function Vendor(name) {
    this.name = name;

    this.say = function() {
        log.add("I am vendor " + name);
    };
}

function VendorFactory() {

    this.create = function(name) {
        return new Vendor(name);
    }
}

var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n" },
        show: function() {
            console.log(log);
            log = "";
        }
    }
})();

function run() {
    var persons = [];
    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();

    persons.push(employeeFactory.create("Joan DiSilva"));
    persons.push(employeeFactory.create("Tim O´Neill"));
    persons.push(vendorFactory.create("Geraldo Martins"));
    persons.push(vendorFactory.create("Nicolas Osvald"));

    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }

    log.show();
}

run();