type Person = {
	age: number
	name: string
	test: number | string
}
const person1 = {
	age: 21,
	name: 'isaac',
	test: 23,
} satisfies Person
person1.test
//test: number

const person2 = {
	age: 21,
	name: 'isaac',
	test: '23',
} satisfies Person
person2.test
//test: string

type Test<T extends number | string> = T extends number ? number : string

function sum(a: number, b: number): number
function sum(a: string, b: string): string
function sum(a: any, b: any) {
	return a + b
}

const a = sum(2, 2)
//const a: number

const b = sum('a', 'b')
//const b: string
