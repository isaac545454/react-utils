function mostrarMensagem(): void {
	console.log('Esta é uma mensagem.')
}

function lançarErro(mensagem: string): never {
	throw new Error(mensagem)
}

function loopInfinito(): never {
	while (true) {
		console.log('true')
	}
}
