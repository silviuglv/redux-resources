import { oauthApi } from '../oauthApi'

test('adds 1 + 2 to equal 3', () => {
	expect(1 + 2).toBe(3)
	oauthApi
		.createAccessToken({
			email: 'james@approveme.com',
			password: 'approveme',
		})
		.then((response) => {
			const { data } = response
			console.log(data)
		})
})
