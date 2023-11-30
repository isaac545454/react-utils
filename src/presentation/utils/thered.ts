self.onmessage = function (e: MessageEvent<number>) {
	const result = e.data * e.data
	self.postMessage(result)
}
