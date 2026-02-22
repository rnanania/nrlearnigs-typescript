let isDone: boolean = false;    // boolean
console.log("isDone", isDone);
let color: string = "blue";     // string
console.log("color", color);    // blue
let decimal: number = 6;        // number
console.log("decimal", decimal); // 6
let hex: number = 0xf00d;       // hexadecimal
console.log("hex", hex); // 61453
let binary: number = 0b1010;    // binary
console.log("binary", binary); // 10
let octal: number = 0o744;      // octal
console.log("octal", octal); // 484

let notDefined: undefined = undefined; // undefined
console.log("notDefined", notDefined); // undefined
let nullValue: null = null; // null
console.log("nullValue", nullValue); // null
let voidValue: void = undefined; // void
console.log("voidValue", voidValue); // undefined
let neverValue: never = undefined as never; // never
console.log("neverValue", neverValue); // never undefined
let anyValue: any = "hello"; // any
console.log("anyValue", anyValue); // hello
let unknownValue: unknown = "hello"; // unknown
console.log("unknownValue", unknownValue); // unknown "hello"
let penta: symbol = Symbol("penta"); // symbol
console.log("penta", penta); // Symbol(penta)
let big: bigint = 100n; // bigint
console.log("big", big); // 100n

let regex: RegExp = new RegExp("hello"); // regex
console.log("regex", regex); // /hello/
let array: Array<number> = [1, 2, 3]; // array
console.log("array", array); // [ 1, 2, 3 ]
let set: Set<number> = new Set([1, 2, 3]); // set
console.log("set", set); // Set { 1, 2, 3 }
class Queue<T> {
    private data: T[] = [];
    push(item: T) {
        this.data.push(item);
    }
    pop(): T | undefined {
        return this.data.shift();
    }
}
let queue: Queue<number> = new Queue();
queue.push(1);
queue.push(2);
console.log("queue.pop()", queue.pop()); // 1


let tuple: [string, number] = ["hello", 10];
console.log("tuple", tuple); // [ "hello", 10 ]
// tuple = [10, "hello"]; // error
// console.log("tuple", tuple); // [ 10, "hello" ]

enum Color {
    Red = 0,
    Green = 1,
    Blue = 2,
}
console.log("Color.Red", Color.Red); // 0
console.log("Color.Green", Color.Green); // 1
console.log("Color.Blue", Color.Blue); // 2


type Add = (a: number, b: number) => number;
let add: Add = (a, b) => a + b;
console.log("add(1, 2)", add(1, 2)); // 3

// require @types/node to use process.env with typescript
process.env.NODE_ENV = "development";
