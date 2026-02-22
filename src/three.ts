class Person {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }

    // incrementAge() {
    //     this.age++;
    // }

    // arrow function is bound to the person object
    incrementAge = () => {
        this.age++;
    }    
}

let person = new Person("John", 30);
console.log(person.getName());
console.log(person.getAge());   // 30
person.incrementAge();
console.log(person.getAge());   // 31

// Works because the arrow function is bound to the person object
const callbackIncrementAge = person.incrementAge;
callbackIncrementAge();

// Works because the arrow function is bound to the person object
setTimeout(person.incrementAge, 1000);

setTimeout(() => {
    console.info("2 seconds later", person.getAge());
}, 2000);