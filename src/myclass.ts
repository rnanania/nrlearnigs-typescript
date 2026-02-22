class Animal {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(this.name, "Woof! Woof!");
    }
}

let dog = new Dog("Buddy");
dog.move(10);
dog.bark();