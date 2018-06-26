export const toObject = (arr) => arr.reduce((obj, item, index) => {
	obj[index] = item

	return obj
}, {})

export const toArray = (obj) => Object.keys(obj).reduce((arr, key) => {
	const item = obj[key]
	arr.push(item)

	return arr
}, [])

const alphaNumerical =
	'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

export const randomString = (length = 6, chars = alphaNumerical) => {
	let result = ''
	for (let i = length; i > 0; --i) {
		result += chars[Math.floor(Math.random() * chars.length)]
	}
	return result
}
