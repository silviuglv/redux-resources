const config = {
	dev_env: true,
	apiBase: process.versions.node ? '' : process.env.REACT_APP_API_BASE_URL,
	apiMock: process.versions.node ? '' : process.env.REACT_APP_API_MOCK_BASE_URL,
	google: {
		scopes: {
			authentication: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
			contacts: 'https://www.googleapis.com/auth/contacts.readonly',
			drive:
				'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
		},
	},
	mockData: {
		package_id: 'ck6eavzre0001qsktv0gfx2c7',
		account_id: 'ck69oo31b008sgpktr08xde1h',
		recipient_id: 'ck6eawk8i0001saktnladqcij',
		document_id: 'ck69oo88h00cygpktogz8jwi0',
		user_id: 'ck69oo0rn008kgpktmeds1dk7',
		field_id: 'ck6ebbbin0001e4kt98oc16zl',
		page_id: 'ck69oo8d400czgpktzddv5yq7',
		package_type_id: 'ck5yi0cwk030mwgpb7llx086d',
	},
}

type Config = {
	dev_env: boolean
	apiBase: string
	apiMock: string
	google: {
		scopes: { [key: string]: string }
	}
	mockData: {
		package_id: string
		account_id: string
		recipient_id: string
		document_id: string
		user_id: string
		field_id: string
		page_id: string
		package_type_id: string
	}
}

export default config as Config
