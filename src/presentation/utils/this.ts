type ObjectGenerator = {
	name: string
	lastName: string
}

const objectGenerator = ({ name, lastName }: ObjectGenerator) => {
	return {
		fullName: `${name} ${lastName}`,
		getFullName: function () {
			return this.fullName
		},
	}
}

const Person1 = objectGenerator({ name: 'isaac', lastName: 'gomes' })
console.log(Person1.getFullName())
// "isaac gomes"

const Person2 = objectGenerator({ name: 'test', lastName: 'test' })
console.log(Person2.getFullName())
//"test test"
