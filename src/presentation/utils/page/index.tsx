export const ListUser = () => {
	const handleDeleteUser = () => {
		console.log('deleteUser')
	}

	const handleCreatedUser = () => {
		console.log('createdUser')
	}

	return (
		<div>
			<button onClick={handleDeleteUser}>Deletar</button>
			<button onClick={handleCreatedUser}>Criar Usuario</button>
		</div>
	)
}

const ListUserViewModel = () => {
	const handleDeleteUser = () => console.log('deleteUser')
	const handleCreatedUser = () => console.log('createdUser')

	return { handleDeleteUser, handleCreatedUser }
}

type ListUserMethods = ReturnType<typeof ListUserViewModel>
const ListUserView = ({ handleCreatedUser, handleDeleteUser }: ListUserMethods) => {
	return (
		<div>
			<button onClick={handleDeleteUser}>Deletar</button>
			<button onClick={handleCreatedUser}>Criar Usuario</button>
		</div>
	)
}

export const App1 = () => {
	const listUserViewModel = ListUserViewModel()
	return <ListUserView {...listUserViewModel} />
}
