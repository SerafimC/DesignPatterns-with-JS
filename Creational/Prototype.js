/* Specify the kind of objects to create using a prototypical
 instance, and create new objects by copying this prototype */

function CustomerPrototype(proto) {
    this.proto = proto;

    this.clone = function () {
        var customer = new Customer();

        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;

        return customer;
    }
}

function Customer(first, last, status) {
    this.first = first;
    this.last = last;
    this.status = status;

    this.say = function () {
        console.log(this.first + " " + this.last + " " + this.status);
    }
}

function run() {
    var proto = new Customer("AA", "BB", "CC");
    var prototype = new CustomerPrototype(proto);

    var customer = prototype.clone();
    // var customer = proto;
    customer.say();
    proto.say();

    customer.first = "DD" // Atribute change to prove that customer != proto

    customer.say();
    proto.say();
}

run()