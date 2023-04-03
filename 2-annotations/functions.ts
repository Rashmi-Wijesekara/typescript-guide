const add = (num1: number, num2: number): number => {
	const total = num1 + num2
	return total
}

function addition(num1: number, num2: number): number {
	const total = num1 + num2
	return total
}

const forecast = {
	date: new Date(),
	weather: 'rainy'
}

const forecastLog = ({date, weather}: {date: Date, weather: string}): void => {
	console.log(date)
	console.log(weather)
}