import { authApi } from '../authApi'

test('adds 1 + 2 to equal 3', () => {
	expect(1 + 2).toBe(3)
	authApi
		.createAccessToken({
			email: 'james@approveme.com',
			password: 'approveme',
		})
		.then((response) => {
			const { data } = response
			console.log(data)
		})
})
