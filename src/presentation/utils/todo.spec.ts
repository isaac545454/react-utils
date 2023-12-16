import { faker } from '@faker-js/faker'
import { act, renderHook } from '@testing-library/react'
import { useState } from 'react'

type Task = {
	name: string
	id: number
}

type TodoMethods = {
	add: (task: Task) => void
	remove: (id: number) => void
	list: Array<Task>
}

export const todoList = (): TodoMethods => {
	const [list, setList] = useState<Array<Task>>([])

	const add = (task: Task): void => {
		setList(state => [...state, task])
	}

	const remove = (id: number): void => {
		setList(state => state.filter(item => item.id !== id))
	}

	return { add, remove, list }
}

const taskGenerator = () => ({
	id: faker.number.int(),
	name: faker.person.firstName(),
})

describe('todo', () => {
	let todo: TodoMethods
	beforeEach(() => renderHook(() => (todo = todoList())))

	test('add', async () => {
		const task = taskGenerator()
		act(() => todo.add(task))
		expect(todo.list).toEqual([task])
	})
	test('remove', async () => {
		const task = taskGenerator()
		act(() => todo.add(task))
		act(() => todo.remove(task.id))
		expect(todo.list).toEqual([])
	})
})
