class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

const me = new Person('Cameron', 6);
console.log(me.getGreeting());
console.log(me.getDescription());