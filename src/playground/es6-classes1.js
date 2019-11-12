class Person {   //creating class called person using constructor and give it to the names u want
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

class Student extends Person {
    constructor(name, age, major= 'english') {
        super(name,age);
        this.major = major;
    }
    getInformation() {
        let description = super.getDescription();
        description += `Major is ${this.major}`;
        return description;
    }
}

const Student1= new Student('Hellen', 21, 'Biology');
console.log(Student1);

class Traveller extends Person {
    constructor(name,age,homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getData() {
        let greeting = super.getGreeting();
          greeting += `I come from ${this.homeLocation}`;
        return greeting;

    }
}

const traveller1 = new Traveller('Ash', 23, 'Cuba');
console.log(traveller1.getData());