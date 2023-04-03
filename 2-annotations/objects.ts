const profile = {
	name: 'Rashmi',
	age: 24,
	coords: {
		lat: 0,
		lng: 14
	},
	setAge(age: number): void {
		this.age = age
	}
}

// destructioning
const {age}: {age: number} = profile

const { lat, lng }: { lat: number; lng: number} = profile.coords