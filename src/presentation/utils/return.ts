type User = {
	isActive: boolean
	hasPermission: boolean
}
// function processUserData({ hasPermission, isActive }: User) {
// 	if (isActive) {
// 		if (hasPermission) {
// 			return hasPermission
// 		}
// 	}
// 	return false
// }

// const user = { isActive: true, hasPermission: true }
// const result = processUserData(user)
// console.log(result)

function processUserData({ hasPermission, isActive }: User): boolean {
	return !!isActive && !!hasPermission
}
