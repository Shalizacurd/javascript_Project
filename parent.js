class Parent {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name: " + this.name);
    }

    parentMethod() {
        console.log("This is a method from Parent class");
    }
}

module.exports = Parent;