export default {
	apiBase: process.versions.node ? '' : process.env.REACT_APP_API_BASE_URL,
	google: {
		clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
		scopes: {
			authentication: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
			contacts: 'https://www.googleapis.com/auth/contacts.readonly',
			drive:
				'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
		},
	},
}
