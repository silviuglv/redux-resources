import {
	CreatePackageDocumentRequest,
	CreatePackageRequest,
	CreateRecipientRequest,
	Document,
	Error,
	GetPackageLexiconRequest,
	GetPackagesRequest,
	Package,
	Page,
	PaginatedApiResponse,
	Recipient,
	UpdateDocumentRequest,
	UpdatePackageRequest,
	UpdateRecipientRequest,
} from '../../types'

const types = {
	GET_PACKAGES: '[packages] GET_PACKAGES',
	GET_PACKAGES_INITIAL_STATE: '[packages] GET_PACKAGES_INITIAL_STATE',
	GET_PACKAGES_LOADING: '[packages] GET_PACKAGES_LOADING',
	GET_PACKAGES_FULFILLED: '[packages] GET_PACKAGES_FULFILLED',
	GET_PACKAGES_REJECTED: '[packages] GET_PACKAGES_REJECTED',

	GET_PACKAGE_LEXICON: '[packages] GET_PACKAGE_LEXICON',
	GET_PACKAGE_LEXICON_INITIAL_STATE: '[packages] GET_PACKAGE_LEXICON_INITIAL_STATE',
	GET_PACKAGE_LEXICON_LOADING: '[packages] GET_PACKAGE_LEXICON_LOADING',
	GET_PACKAGE_LEXICON_FULFILLED: '[packages] GET_PACKAGE_LEXICON_FULFILLED',
	GET_PACKAGE_LEXICON_REJECTED: '[packages] GET_PACKAGE_LEXICON_REJECTED',

	CREATE_PACKAGE: '[packages] CREATE_PACKAGE',
	CREATE_PACKAGE_INITIAL_STATE: '[packages] CREATE_PACKAGE_INITIAL_STATE',
	CREATE_PACKAGE_LOADING: '[packages] CREATE_PACKAGE_LOADING',
	CREATE_PACKAGE_FULFILLED: '[packages] CREATE_PACKAGE_FULFILLED',
	CREATE_PACKAGE_REJECTED: '[packages] CREATE_PACKAGE_REJECTED',

	SHOW_PACKAGE: '[packages] SHOW_PACKAGE',
	SHOW_PACKAGE_INITIAL_STATE: '[packages] SHOW_PACKAGE_INITIAL_STATE',
	SHOW_PACKAGE_LOADING: '[packages] SHOW_PACKAGE_LOADING',
	SHOW_PACKAGE_FULFILLED: '[packages] SHOW_PACKAGE_FULFILLED',
	SHOW_PACKAGE_REJECTED: '[packages] SHOW_PACKAGE_REJECTED',

	DELETE_PACKAGE: '[packages] DELETE_PACKAGE',
	DELETE_PACKAGE_INITIAL_STATE: '[packages] DELETE_PACKAGE_INITIAL_STATE',
	DELETE_PACKAGE_LOADING: '[packages] DELETE_PACKAGE_LOADING',
	DELETE_PACKAGE_FULFILLED: '[packages] DELETE_PACKAGE_FULFILLED',
	DELETE_PACKAGE_REJECTED: '[packages] DELETE_PACKAGE_REJECTED',

	UPDATE_PACKAGE: '[packages] UPDATE_PACKAGE',
	UPDATE_PACKAGE_INITIAL_STATE: '[packages] UPDATE_PACKAGE_INITIAL_STATE',
	UPDATE_PACKAGE_LOADING: '[packages] UPDATE_PACKAGE_LOADING',
	UPDATE_PACKAGE_FULFILLED: '[packages] UPDATE_PACKAGE_FULFILLED',
	UPDATE_PACKAGE_REJECTED: '[packages] UPDATE_PACKAGE_REJECTED',

	RESEND_SIGNATURE_EMAIL: '[packages] RESEND_SIGNATURE_EMAIL',
	RESEND_SIGNATURE_EMAIL_INITIAL_STATE: '[packages] RESEND_SIGNATURE_EMAIL_INITIAL_STATE',
	RESEND_SIGNATURE_EMAIL_LOADING: '[packages] RESEND_SIGNATURE_EMAIL_LOADING',
	RESEND_SIGNATURE_EMAIL_FULFILLED: '[packages] RESEND_SIGNATURE_EMAIL_FULFILLED',
	RESEND_SIGNATURE_EMAIL_REJECTED: '[packages] RESEND_SIGNATURE_EMAIL_REJECTED',

	GET_PACKAGE_RECIPIENTS: '[packages] GET_PACKAGE_RECIPIENTS',
	GET_PACKAGE_RECIPIENTS_INITIAL_STATE: '[packages] GET_PACKAGE_RECIPIENTS_INITIAL_STATE',
	GET_PACKAGE_RECIPIENTS_LOADING: '[packages] GET_PACKAGE_RECIPIENTS_LOADING',
	GET_PACKAGE_RECIPIENTS_FULFILLED: '[packages] GET_PACKAGE_RECIPIENTS_FULFILLED',
	GET_PACKAGE_RECIPIENTS_REJECTED: '[packages] GET_PACKAGE_RECIPIENTS_REJECTED',

	CREATE_PACKAGE_RECIPIENT: '[packages] CREATE_PACKAGE_RECIPIENT',
	CREATE_PACKAGE_RECIPIENT_INITIAL_STATE: '[packages] CREATE_PACKAGE_RECIPIENT_INITIAL_STATE',
	CREATE_PACKAGE_RECIPIENT_LOADING: '[packages] CREATE_PACKAGE_RECIPIENT_LOADING',
	CREATE_PACKAGE_RECIPIENT_FULFILLED: '[packages] CREATE_PACKAGE_RECIPIENT_FULFILLED',
	CREATE_PACKAGE_RECIPIENT_REJECTED: '[packages] CREATE_PACKAGE_RECIPIENT_REJECTED',

	UPDATE_PACKAGE_RECIPIENT: '[packages] UPDATE_PACKAGE_RECIPIENT',
	UPDATE_PACKAGE_RECIPIENT_INITIAL_STATE: '[packages] UPDATE_PACKAGE_RECIPIENT_INITIAL_STATE',
	UPDATE_PACKAGE_RECIPIENT_LOADING: '[packages] UPDATE_PACKAGE_RECIPIENT_LOADING',
	UPDATE_PACKAGE_RECIPIENT_FULFILLED: '[packages] UPDATE_PACKAGE_RECIPIENT_FULFILLED',
	UPDATE_PACKAGE_RECIPIENT_REJECTED: '[packages] UPDATE_PACKAGE_RECIPIENT_REJECTED',

	DELETE_PACKAGE_RECIPIENT: '[packages] DELETE_PACKAGE_RECIPIENT',
	DELETE_PACKAGE_RECIPIENT_INITIAL_STATE: '[packages] DELETE_PACKAGE_RECIPIENT_INITIAL_STATE',
	DELETE_PACKAGE_RECIPIENT_LOADING: '[packages] DELETE_PACKAGE_RECIPIENT_LOADING',
	DELETE_PACKAGE_RECIPIENT_FULFILLED: '[packages] DELETE_PACKAGE_RECIPIENT_FULFILLED',
	DELETE_PACKAGE_RECIPIENT_REJECTED: '[packages] DELETE_PACKAGE_RECIPIENT_REJECTED',

	GET_PACKAGE_DOCUMENTS: '[packages] GET_PACKAGE_DOCUMENTS',
	GET_PACKAGE_DOCUMENTS_INITIAL_STATE: '[packages] GET_PACKAGE_DOCUMENTS_INITIAL_STATE',
	GET_PACKAGE_DOCUMENTS_LOADING: '[packages] GET_PACKAGE_DOCUMENTS_LOADING',
	GET_PACKAGE_DOCUMENTS_FULFILLED: '[packages] GET_PACKAGE_DOCUMENTS_FULFILLED',
	GET_PACKAGE_DOCUMENTS_REJECTED: '[packages] GET_PACKAGE_DOCUMENTS_REJECTED',

	CREATE_PACKAGE_DOCUMENTS: '[packages] CREATE_PACKAGE_DOCUMENTS',
	CREATE_PACKAGE_DOCUMENTS_INITIAL_STATE: '[packages] CREATE_PACKAGE_DOCUMENTS_INITIAL_STATE',
	CREATE_PACKAGE_DOCUMENTS_LOADING: '[packages] CREATE_PACKAGE_DOCUMENTS_LOADING',
	CREATE_PACKAGE_DOCUMENTS_FULFILLED: '[packages] CREATE_PACKAGE_DOCUMENTS_FULFILLED',
	CREATE_PACKAGE_DOCUMENTS_REJECTED: '[packages] CREATE_PACKAGE_DOCUMENTS_REJECTED',

	UPDATE_DOCUMENT: '[packages] UPDATE_DOCUMENT',
	UPDATE_DOCUMENT_INITIAL_STATE: '[packages] UPDATE_DOCUMENT_INITIAL_STATE',
	UPDATE_DOCUMENT_LOADING: '[packages] UPDATE_DOCUMENT_LOADING',
	UPDATE_DOCUMENT_FULFILLED: '[packages] UPDATE_DOCUMENT_FULFILLED',
	UPDATE_DOCUMENT_REJECTED: '[packages] UPDATE_DOCUMENT_REJECTED',

	CREATE_DOCUMENT_FROM_CONNECTED_SERVICE: '[packages] CREATE_DOCUMENT_FROM_CONNECTED_SERVICE',
	CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_INITIAL_STATE:
		'[packages] CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_INITIAL_STATE',
	CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_LOADING: '[packages] CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_LOADING',
	CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_FULFILLED: '[packages] CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_FULFILLED',
	CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_REJECTED: '[packages] CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_REJECTED',

	DOWNLOAD_PACKAGE_DOCUMENT: '[packages] DOWNLOAD_PACKAGE_DOCUMENT',

	GET_PACKAGE_IMAGE_URL: '[packages] GET_PACKAGE_IMAGE_URL',
	SET_PACKAGE_IMAGE_URL: '[packages] SET_PACKAGE_IMAGE_URL',

	GET_DOCUMENT_IMAGE_URL: '[packages] GET_DOCUMENT_IMAGE_URL',
	SET_DOCUMENT_IMAGE_URL: '[packages] SET_DOCUMENT_IMAGE_URL',

	GET_DOCUMENT_PAGE_IMAGE_URL: '[packages] GET_DOCUMENT_PAGE_IMAGE_URL',
	SET_DOCUMENT_PAGE_IMAGE_URL: '[packages] SET_DOCUMENT_PAGE_IMAGE_URL',

	DELETE_DOCUMENT: '[packages] DELETE_DOCUMENT',
	DELETE_DOCUMENT_INITIAL_STATE: '[packages] DELETE_DOCUMENT_INITIAL_STATE',
	DELETE_DOCUMENT_LOADING: '[packages] DELETE_DOCUMENT_LOADING',
	DELETE_DOCUMENT_FULFILLED: '[packages] DELETE_DOCUMENT_FULFILLED',
	DELETE_DOCUMENT_REJECTED: '[packages] DELETE_DOCUMENT_REJECTED',

	GET_PAGES: '[packages] GET_PAGES',
	GET_PAGES_INITIAL_STATE: '[packages] GET_PAGES_INITIAL_STATE',
	GET_PAGES_LOADING: '[packages] GET_PAGES_LOADING',
	GET_PAGES_FULFILLED: '[packages] GET_PAGES_FULFILLED',
	GET_PAGES_REJECTED: '[packages] GET_PAGES_REJECTED',

	PUBLISH: '[packages] PUBLISH',
	PUBLISH_INITIAL_STATE: '[packages] PUBLISH_INITIAL_STATE',
	PUBLISH_LOADING: '[packages] PUBLISH_LOADING',
	PUBLISH_FULFILLED: '[packages] PUBLISH_FULFILLED',
	PUBLISH_REJECTED: '[packages] PUBLISH_REJECTED',

	GET_MY_RECIPIENT: '[packages] GET_MY_RECIPIENT',
	GET_MY_RECIPIENT_INITIAL_STATE: '[packages] GET_MY_RECIPIENT_INITIAL_STATE',
	GET_MY_RECIPIENT_LOADING: '[packages] GET_MY_RECIPIENT_LOADING',
	GET_MY_RECIPIENT_FULFILLED: '[packages] GET_MY_RECIPIENT_FULFILLED',
	GET_MY_RECIPIENT_REJECTED: '[packages] GET_MY_RECIPIENT_REJECTED',
}

export const packageActions = {
	...types,
	getPackages: (payload: GetPackagesRequest = {}, successCb?, errorCb?) => ({
		type: types.GET_PACKAGES,
		payload,
		successCb,
		errorCb,
	}),
	getPackagesInitialState: () => ({
		type: types.GET_PACKAGES_INITIAL_STATE,
		payload: null,
	}),
	getPackagesLoading: () => ({
		type: types.GET_PACKAGES_LOADING,
		payload: null,
	}),
	getPackagesFulfilled: (payload: PaginatedApiResponse<Package>) => ({
		type: types.GET_PACKAGES_FULFILLED,
		payload,
	}),
	getPackagesRejected: (payload: Error) => ({
		type: types.GET_PACKAGES_REJECTED,
		payload,
	}),

	getPackageLexicon: (payload: GetPackageLexiconRequest = {}, successCb?, errorCb?) => ({
		type: types.GET_PACKAGE_LEXICON,
		payload,
		successCb,
		errorCb,
	}),
	getPackageLexiconInitialState: () => ({
		type: types.GET_PACKAGE_LEXICON_INITIAL_STATE,
		payload: null,
	}),
	getPackageLexiconLoading: () => ({
		type: types.GET_PACKAGE_LEXICON_LOADING,
		payload: null,
	}),
	getPackageLexiconFulfilled: (payload) => ({
		type: types.GET_PACKAGE_LEXICON_FULFILLED,
		payload,
	}),
	getPackageLexiconRejected: (payload: Error) => ({
		type: types.GET_PACKAGE_LEXICON_REJECTED,
		payload,
	}),

	createPackage: (payload: CreatePackageRequest, successCb?, errorCb?) => ({
		type: types.CREATE_PACKAGE,
		payload,
		successCb,
		errorCb,
	}),
	createPackageInitialState: () => ({
		type: types.CREATE_PACKAGE_INITIAL_STATE,
		payload: null,
	}),
	createPackageLoading: () => ({
		type: types.CREATE_PACKAGE_LOADING,
		payload: null,
	}),
	createPackageFulfilled: (payload: Package) => ({
		type: types.CREATE_PACKAGE_FULFILLED,
		payload,
	}),
	createPackageRejected: (payload: Error) => ({
		type: types.CREATE_PACKAGE_REJECTED,
		payload,
	}),

	showPackage: (id: string, successCb?, errorCb?) => ({
		type: types.SHOW_PACKAGE,
		payload: null,
		id,
		successCb,
		errorCb,
	}),
	showPackageInitialState: () => ({
		type: types.SHOW_PACKAGE_INITIAL_STATE,
		payload: null,
	}),
	showPackageLoading: () => ({
		type: types.SHOW_PACKAGE_LOADING,
		payload: null,
	}),
	showPackageFulfilled: (payload: Package) => ({
		type: types.SHOW_PACKAGE_FULFILLED,
		payload,
	}),
	showPackageRejected: (payload: Error) => ({
		type: types.SHOW_PACKAGE_REJECTED,
		payload,
	}),

	updatePackage: (id: string, payload: UpdatePackageRequest, successCb?, errorCb?) => ({
		type: types.UPDATE_PACKAGE,
		payload,
		id,
		successCb,
		errorCb,
	}),
	updatePackageInitialState: () => ({
		type: types.UPDATE_PACKAGE_INITIAL_STATE,
		payload: null,
	}),
	updatePackageLoading: () => ({
		type: types.UPDATE_PACKAGE_LOADING,
		payload: null,
	}),
	updatePackageFulfilled: (payload: Package) => ({
		type: types.UPDATE_PACKAGE_FULFILLED,
		payload,
	}),
	updatePackageRejected: (payload: Error) => ({
		type: types.UPDATE_PACKAGE_REJECTED,
		payload,
	}),

	resendSignatureEmail: (id: string) => ({
		type: types.RESEND_SIGNATURE_EMAIL,
		id,
	}),
	resendSignatureEmailInitialState: () => ({
		type: types.RESEND_SIGNATURE_EMAIL_INITIAL_STATE,
		payload: null,
	}),
	resendSignatureEmailLoading: () => ({
		type: types.RESEND_SIGNATURE_EMAIL_LOADING,
		payload: null,
	}),
	resendSignatureEmailFulfilled: (payload: Package) => ({
		type: types.RESEND_SIGNATURE_EMAIL_FULFILLED,
		payload,
	}),
	resendSignatureEmailRejected: (payload: Error) => ({
		type: types.RESEND_SIGNATURE_EMAIL_REJECTED,
		payload,
	}),

	deletePackage: (id: string, successCb?, errorCb?) => ({
		type: types.DELETE_PACKAGE,
		payload: null,
		id,
		successCb,
		errorCb,
	}),
	deletePackageInitialState: () => ({
		type: types.DELETE_PACKAGE_INITIAL_STATE,
		payload: null,
	}),
	deletePackageLoading: () => ({
		type: types.DELETE_PACKAGE_LOADING,
		payload: null,
	}),
	deletePackageFulfilled: () => ({
		type: types.DELETE_PACKAGE_FULFILLED,
		payload: null,
	}),
	deletePackageRejected: (payload: Error) => ({
		type: types.DELETE_PACKAGE_REJECTED,
		payload,
	}),

	getPackageRecipients: (id: string, payload = {}, successCb?, errorCb?) => ({
		type: types.GET_PACKAGE_RECIPIENTS,
		payload,
		id,
		successCb,
		errorCb,
	}),
	getPackageRecipientsInitialState: () => ({
		type: types.GET_PACKAGE_RECIPIENTS_INITIAL_STATE,
		payload: null,
	}),
	getPackageRecipientsLoading: () => ({
		type: types.GET_PACKAGE_RECIPIENTS_LOADING,
		payload: null,
	}),
	getPackageRecipientsFulfilled: (payload: PaginatedApiResponse<Recipient>) => ({
		type: types.GET_PACKAGE_RECIPIENTS_FULFILLED,
		payload,
	}),
	getPackageRecipientsRejected: (payload: Error) => ({
		type: types.GET_PACKAGE_RECIPIENTS_REJECTED,
		payload,
	}),

	createPackageRecipient: (id: string, payload: CreateRecipientRequest, successCb?, errorCb?) => ({
		type: types.CREATE_PACKAGE_RECIPIENT,
		payload,
		id,
		successCb,
		errorCb,
	}),
	createPackageRecipientInitialState: () => ({
		type: types.CREATE_PACKAGE_RECIPIENT_INITIAL_STATE,
		payload: null,
	}),
	createPackageRecipientLoading: () => ({
		type: types.CREATE_PACKAGE_RECIPIENT_LOADING,
		payload: null,
	}),
	createPackageRecipientFulfilled: (payload: Recipient) => ({
		type: types.CREATE_PACKAGE_RECIPIENT_FULFILLED,
		payload,
	}),
	createPackageRecipientRejected: (payload: Error) => ({
		type: types.CREATE_PACKAGE_RECIPIENT_REJECTED,
		payload,
	}),

	updatePackageRecipient: (id: string, recipientId: string, payload: UpdateRecipientRequest, successCb?, errorCb?) => ({
		type: types.UPDATE_PACKAGE_RECIPIENT,
		payload,
		id,
		recipientId,
		successCb,
		errorCb,
	}),
	updatePackageRecipientInitialState: () => ({
		type: types.UPDATE_PACKAGE_RECIPIENT_INITIAL_STATE,
		payload: null,
	}),
	updatePackageRecipientLoading: () => ({
		type: types.UPDATE_PACKAGE_RECIPIENT_LOADING,
		payload: null,
	}),
	updatePackageRecipientFulfilled: (payload: Recipient) => ({
		type: types.UPDATE_PACKAGE_RECIPIENT_FULFILLED,
		payload,
	}),
	updatePackageRecipientRejected: (payload: Error) => ({
		type: types.UPDATE_PACKAGE_RECIPIENT_REJECTED,
		payload,
	}),

	deletePackageRecipient: (id: string, recipientId: string, successCb?, errorCb?) => ({
		type: types.DELETE_PACKAGE_RECIPIENT,
		payload: null,
		id,
		recipientId,
		successCb,
		errorCb,
	}),
	deletePackageRecipientInitialState: () => ({
		type: types.DELETE_PACKAGE_RECIPIENT_INITIAL_STATE,
		payload: null,
	}),
	deletePackageRecipientLoading: () => ({
		type: types.DELETE_PACKAGE_RECIPIENT_LOADING,
		payload: null,
	}),
	deletePackageRecipientFulfilled: (response?) => ({
		type: types.DELETE_PACKAGE_RECIPIENT_FULFILLED,
		payload: response,
	}),
	deletePackageRecipientRejected: (payload: Error) => ({
		type: types.DELETE_PACKAGE_RECIPIENT_REJECTED,
		payload,
	}),

	getPackageDocuments: (id: string, payload = {}, successCb?, errorCb?) => ({
		type: types.GET_PACKAGE_DOCUMENTS,
		payload,
		id,
		successCb,
		errorCb,
	}),
	getPackageDocumentsInitialState: () => ({
		type: types.GET_PACKAGE_DOCUMENTS_INITIAL_STATE,
		payload: null,
	}),
	getPackageDocumentsLoading: () => ({
		type: types.GET_PACKAGE_DOCUMENTS_LOADING,
		payload: null,
	}),
	getPackageDocumentsFulfilled: (payload: PaginatedApiResponse<Document>) => ({
		type: types.GET_PACKAGE_DOCUMENTS_FULFILLED,
		payload,
	}),
	getPackageDocumentsRejected: (payload: Error) => ({
		type: types.GET_PACKAGE_DOCUMENTS_REJECTED,
		payload,
	}),

	createPackageDocuments: (id: string, payload: CreatePackageDocumentRequest, successCb?, errorCb?) => ({
		type: types.CREATE_PACKAGE_DOCUMENTS,
		payload,
		id,
		successCb,
		errorCb,
	}),
	createPackageDocumentsInitialState: () => ({
		type: types.CREATE_PACKAGE_DOCUMENTS_INITIAL_STATE,
		payload: null,
	}),
	createPackageDocumentsLoading: () => ({
		type: types.CREATE_PACKAGE_DOCUMENTS_LOADING,
		payload: null,
	}),
	createPackageDocumentsFulfilled: (payload: Document) => ({
		type: types.CREATE_PACKAGE_DOCUMENTS_FULFILLED,
		payload,
	}),
	createPackageDocumentsRejected: (payload: Error) => ({
		type: types.CREATE_PACKAGE_DOCUMENTS_REJECTED,
		payload,
	}),
	updateDocument: (packageId: string, documentId: string, payload: UpdateDocumentRequest, successCb?, errorCb?) => ({
		type: types.UPDATE_DOCUMENT,
		payload,
		packageId,
		documentId,
		successCb,
		errorCb,
	}),

	updateDocumentInitialState: () => ({
		type: types.UPDATE_DOCUMENT_INITIAL_STATE,
		payload: null,
	}),
	updateDocumentLoading: () => ({
		type: types.UPDATE_DOCUMENT_LOADING,
		payload: null,
	}),
	updateDocumentFulfilled: (payload: Document) => ({
		type: types.UPDATE_DOCUMENT_FULFILLED,
		payload,
	}),
	updateDocumentRejected: (payload: Error) => ({
		type: types.UPDATE_DOCUMENT_REJECTED,
		payload,
	}),

	createDocumentFromSocialAccount: (
		id: string,
		socialAccountId: string,
		externalFileId: string | number,
		successCb?,
		errorCb?
	) => ({
		type: types.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE,
		payload: null,
		id,
		socialAccountId,
		externalFileId,
		successCb,
		errorCb,
	}),
	createDocumentFromSocialAccountInitialState: () => ({
		type: types.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_INITIAL_STATE,
		payload: null,
	}),
	createDocumentFromSocialAccountLoading: () => ({
		type: types.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_LOADING,
		payload: null,
	}),
	createDocumentFromSocialAccountFulfilled: (payload: Document) => ({
		type: types.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_FULFILLED,
		payload,
	}),
	createDocumentFromSocialAccountRejected: (payload: Error) => ({
		type: types.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_REJECTED,
		payload,
	}),

	downloadPackageDocument: (id: string, documentId: string, successCb?, errorCb?) => ({
		type: types.DOWNLOAD_PACKAGE_DOCUMENT,
		payload: null,
		id,
		documentId,
		successCb,
		errorCb,
	}),

	getPackageImageUrl: (id: string, image_url: string, successCb?, errorCb?) => ({
		type: types.GET_PACKAGE_IMAGE_URL,
		payload: null,
		id,
		image_url,
		successCb,
		errorCb,
	}),

	setPackageImageUrl: (id: string, image_url: any, imageUrl: any = image_url) => ({
		type: types.SET_PACKAGE_IMAGE_URL,
		payload: null,
		id,
		image_url,
		imageUrl,
	}),

	getDocumentImageUrl: (documentId: string, image_url: string, successCb?, errorCb?) => ({
		type: types.GET_DOCUMENT_IMAGE_URL,
		payload: null,
		documentId,
		image_url,
		successCb,
		errorCb,
	}),

	setDocumentImageUrl: (documentId: string, imageUrl: any) => ({
		type: types.SET_DOCUMENT_IMAGE_URL,
		payload: null,
		documentId,
		imageUrl,
	}),

	getDocumentPageImageUrl: (documentId: string, pageId: string, image_url: string, successCb?, errorCb?) => ({
		type: types.GET_DOCUMENT_PAGE_IMAGE_URL,
		payload: null,
		documentId,
		pageId,
		image_url,
		successCb,
		errorCb,
	}),

	setDocumentPageImageUrl: (documentId: string, pageId: string, imageUrl: any) => ({
		type: types.SET_DOCUMENT_PAGE_IMAGE_URL,
		payload: null,
		documentId,
		pageId,
		imageUrl,
	}),

	deleteDocument: (id: string, documentId: string, successCb?, errorCb?) => ({
		type: types.DELETE_DOCUMENT,
		payload: null,
		id,
		documentId,
		successCb,
		errorCb,
	}),
	deleteDocumentInitialState: () => ({
		type: types.DELETE_DOCUMENT_INITIAL_STATE,
		payload: null,
	}),
	deleteDocumentLoading: () => ({
		type: types.DELETE_DOCUMENT_LOADING,
		payload: null,
	}),
	deleteDocumentFulfilled: (documentId: string) => ({
		type: types.DELETE_DOCUMENT_FULFILLED,
		payload: documentId,
	}),
	deleteDocumentRejected: (payload: Error) => ({
		type: types.DELETE_DOCUMENT_REJECTED,
		payload,
	}),

	getPages: (packageId: string, payload = {}, successCb?, errorCb?) => ({
		type: types.GET_PAGES,
		payload,
		packageId,
		successCb,
		errorCb,
	}),
	getPagesInitialState: () => ({
		type: types.GET_PAGES_INITIAL_STATE,
		payload: null,
	}),
	getPagesLoading: () => ({
		type: types.GET_PAGES_LOADING,
		payload: null,
	}),
	getPagesFulfilled: (payload: PaginatedApiResponse<Page>) => ({
		type: types.GET_PAGES_FULFILLED,
		payload,
	}),
	getPagesRejected: (payload: Error) => ({
		type: types.GET_PAGES_REJECTED,
		payload,
	}),

	publish: (packageId: string, successCb?, errorCb?) => ({
		type: types.PUBLISH,
		payload: null,
		packageId,
		successCb,
		errorCb,
	}),

	getMyRecipient: (id: string, recipientToken: string) => ({
		type: types.GET_MY_RECIPIENT,
		id,
		recipientToken,
	}),
	getMyRecipientInitialState: () => ({
		type: types.GET_MY_RECIPIENT_INITIAL_STATE,
		payload: null,
	}),
	getMyRecipientLoading: () => ({
		type: types.GET_MY_RECIPIENT_LOADING,
		payload: null,
	}),
	getMyRecipientFulfilled: (payload: PaginatedApiResponse<Package>) => ({
		type: types.GET_MY_RECIPIENT_FULFILLED,
		payload,
	}),
	getMyRecipientRejected: (payload: Error) => ({
		type: types.GET_MY_RECIPIENT_REJECTED,
		payload,
	}),
}
