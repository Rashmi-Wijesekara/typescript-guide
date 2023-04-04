interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
	summary(): string;
}

const oldCivic = {
	name: "civic",
	year: 2000,
	broken: true,
	summary(): string {
		return `year of manufacture: ${this.year}`
	}
}

const printVehicleSummary = (vehicle: Vehicle): void => {
	console.log(vehicle.summary())
}

printVehicleSummary(oldCivic)

// here if we want to print a summary of something other than a vehicle,
// we need to implement another function for that
// so instead we can use following approach

// ************************************************************************

// code reuse with interface
interface printable {
	summary(): string
}

const profile = {
	name: "Rashmi",
	age: 24,
	isEmployer: false,
	summary(): string {
		return `${this.name} is ${this.age} years old`
	}
}

const printSummary = (detail: printable): void => {
	console.log(detail.summary())
}

printSummary(profile)
printSummary(oldCivic)
