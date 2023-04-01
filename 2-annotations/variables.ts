let studentsCount: number = 20

// Type 'boolean' is not assignable to type 'number'
// studentsCount = true

let actor: string = "Pedro"
let isFavourite: boolean = true
let haters: null = null
let scared: undefined = undefined

// built-in objects
let now: Date = new Date()

// array
let colors: string[] = [
	"red", "green", "blue", "black"
]
let counts: number[] = [1,2,3,4]

// classes
class Car {
	private type: string;
	private count: number;

	constructor(type: string, count: number) {
		this.type = type
		this.count = count
	}

	getType() { return this.type }
	getCount() { return this.count }
}

let myCar: Car = new Car("Toyota", 23)
let myCarType: string = myCar.getType()
let myCarsCount: number = myCar.getCount()

// object literal
let point: { x: number; y: number; name: string} = {
	x: 10,
	y: 20,
	name: "center of circle"
}