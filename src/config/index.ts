const config = {
	dev_env: process.env.REACT_DATA_PROVIDER === 'production' ? false : true,
	apiBase: process.env.REACT_APP_API_BASE_URL,
	apiMock: process.env.REACT_APP_API_MOCK_BASE_URL,
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
		card_id: 'test',
		provider: 'approveme',
		connected_service_id: 'test',
		preset_id: 'test',
		field_type_id: 'ck6ljx8ur00dh4uifvc8glfgh',
		folder_id: 'ck6o57x2e00024tifgefkrbj8',
		notification_id: 'ck6ljwi8i00014uif36fuxuqg',
		subscription_id: 'test',
		token: 'test',
		customization_id: 'test',
		customization_type_id: 'test',
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
		card_id: string
		provider: string
		connected_service_id: string
		preset_id: string
		field_type_id: string
		folder_id: string
		notification_id: string
		subscription_id: string
		token: string
		customization_id: string
		customization_type_id: string
	}
}

export default config as Config
