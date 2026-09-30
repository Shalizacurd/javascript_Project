const Parent = require("./parent");

class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    childMethod() {
        console.log("Age: " + this.age);
    }
}

module.exports = Child;