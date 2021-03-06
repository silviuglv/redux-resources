import { fromJS } from 'immutable'
import { packageActions } from '../actions'
import { stateUtility } from '../../utilities'
import { PackagesState } from '../../types'

const state: PackagesState = {
	list: stateUtility.getPaginationInitialState(),
	lexicon: stateUtility.getItemInitialState(),
	item: stateUtility.getItemInitialState(),
	recipients: stateUtility.getPaginationInitialState(),
	documents: stateUtility.getPaginationInitialState(),
	pages: stateUtility.getPaginationInitialState(),
	createPackageDocument: stateUtility.getObserverInitialState(),
	deleteDocument: stateUtility.getObserverInitialState(),
	createPackage: stateUtility.getObserverInitialState(),
	recipient: stateUtility.getItemInitialState(),
	resendSignatureEmail: stateUtility.getItemInitialState(),
}

const initialState = fromJS(state)

export const packages = (state = initialState, action) => {
	switch (action.type) {
		//  list
		case packageActions.GET_PACKAGES_INITIAL_STATE:
			return state.merge({
				list: stateUtility.getPaginationInitialState(),
			})
		case packageActions.GET_PACKAGES_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case packageActions.GET_PACKAGES_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload),
			})
		case packageActions.GET_PACKAGES_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		//  lexicon
		case packageActions.GET_PACKAGE_LEXICON_INITIAL_STATE:
			return state.merge({
				lexicon: stateUtility.getItemInitialState(),
			})
		case packageActions.GET_PACKAGE_LEXICON_LOADING:
			return state.merge({
				lexicon: stateUtility.getItemLoading(),
			})
		case packageActions.GET_PACKAGE_LEXICON_FULFILLED:
			return state.merge({
				lexicon: stateUtility.getItemFulfilled(action.payload),
			})
		case packageActions.GET_PACKAGE_LEXICON_REJECTED:
			return state.merge({
				lexicon: stateUtility.getItemRejected(action.payload),
			})

		//  createPackage
		case packageActions.CREATE_PACKAGE_INITIAL_STATE:
			return state.merge({
				createPackage: stateUtility.getObserverInitialState(),
			})
		case packageActions.CREATE_PACKAGE_LOADING:
			return state.merge({
				createPackage: stateUtility.getObserverLoading(),
			})
		case packageActions.CREATE_PACKAGE_FULFILLED:
			return state.merge({
				createPackage: stateUtility.getObserverFulfilled(),
				item: stateUtility.getItemFulfilled(action.payload),
			})
		case packageActions.CREATE_PACKAGE_REJECTED:
			return state.merge({
				createPackage: stateUtility.getObserverRejected(action.payload),
			})

		//  showPackage
		case packageActions.SHOW_PACKAGE_INITIAL_STATE:
			return state.merge({
				item: stateUtility.getItemInitialState(),
			})
		case packageActions.SHOW_PACKAGE_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case packageActions.SHOW_PACKAGE_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled(action.payload),
			})
		case packageActions.SHOW_PACKAGE_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})

		//  updatePackage
		case packageActions.UPDATE_PACKAGE_INITIAL_STATE:
			return state.merge({
				item: stateUtility.getItemInitialState(),
			})
		case packageActions.UPDATE_PACKAGE_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case packageActions.UPDATE_PACKAGE_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled(action.payload),
			})
		case packageActions.UPDATE_PACKAGE_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})

		//  delete
		case packageActions.DELETE_PACKAGE_INITIAL_STATE:
			return state.merge({
				item: stateUtility.getItemInitialState(),
			})
		case packageActions.DELETE_PACKAGE_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case packageActions.DELETE_PACKAGE_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled(),
			})
		case packageActions.DELETE_PACKAGE_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})

		//  resendSignatureEmail
		case packageActions.RESEND_SIGNATURE_EMAIL_INITIAL_STATE:
			return state.merge({
				resendSignatureEmail: stateUtility.getItemInitialState(),
			})
		case packageActions.RESEND_SIGNATURE_EMAIL_LOADING:
			return state.merge({
				resendSignatureEmail: stateUtility.getItemLoading(),
			})
		case packageActions.RESEND_SIGNATURE_EMAIL_FULFILLED:
			return state.merge({
				resendSignatureEmail: stateUtility.getItemFulfilled(),
			})
		case packageActions.RESEND_SIGNATURE_EMAIL_REJECTED:
			return state.merge({
				resendSignatureEmail: stateUtility.getItemRejected(action.payload),
			})
		//  getPackageDocuments
		case packageActions.GET_PACKAGE_DOCUMENTS_INITIAL_STATE:
			return state.merge({
				documents: stateUtility.getPaginationInitialState(),
			})
		case packageActions.GET_PACKAGE_DOCUMENTS_LOADING:
			return state.merge({
				documents: stateUtility.getPaginationLoading(),
			})
		case packageActions.GET_PACKAGE_DOCUMENTS_FULFILLED:
			return state.merge({
				documents: stateUtility.getPaginationFulfilled(action.payload),
			})
		case packageActions.GET_PACKAGE_DOCUMENTS_REJECTED:
			return state.merge({
				documents: stateUtility.getPaginationRejected(action.payload),
			})

		//  getPages
		case packageActions.GET_PAGES_INITIAL_STATE:
			return state.merge({
				pages: stateUtility.getPaginationInitialState(),
			})
		case packageActions.GET_PAGES_LOADING:
			return state.merge({
				pages: stateUtility.getPaginationLoading(),
			})
		case packageActions.GET_PAGES_FULFILLED:
			return state.merge({
				pages: stateUtility.getPaginationFulfilled(action.payload),
			})
		case packageActions.GET_PAGES_REJECTED:
			return state.merge({
				pages: stateUtility.getPaginationRejected(action.payload),
			})

		//  createPackageDocument
		case packageActions.CREATE_PACKAGE_DOCUMENTS_INITIAL_STATE:
			return state.merge({
				createPackageDocument: stateUtility.getObserverInitialState(),
			})
		case packageActions.CREATE_PACKAGE_DOCUMENTS_LOADING:
			return state.merge({
				createPackageDocument: stateUtility.getObserverLoading(),
			})
		case packageActions.CREATE_PACKAGE_DOCUMENTS_FULFILLED:
			return state.merge({
				createPackageDocument: stateUtility.getObserverFulfilled(),
				documents: stateUtility.addItemToPagination(state.toJS().documents, action.payload, false),
			})
		case packageActions.CREATE_PACKAGE_DOCUMENTS_REJECTED:
			return state.merge({
				createPackageDocument: stateUtility.getObserverRejected(action.payload),
			})
		//	createDocumentFromSocialAccount
		case packageActions.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_INITIAL_STATE:
			return state.merge({
				createPackageDocument: stateUtility.getObserverInitialState(),
			})
		case packageActions.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_LOADING:
			return state.merge({
				createPackageDocument: stateUtility.getObserverLoading(),
			})
		case packageActions.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_FULFILLED:
			return state.merge({
				createPackageDocument: stateUtility.getObserverFulfilled(),
				documents: stateUtility.addItemToPagination(state.toJS().documents, action.payload, false),
			})
		case packageActions.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_REJECTED:
			return state.merge({
				createPackageDocument: stateUtility.getObserverRejected(action.payload),
			})

		//  deleteDocument
		case packageActions.DELETE_DOCUMENT_INITIAL_STATE:
			return state.merge({
				deleteDocument: stateUtility.getObserverInitialState(),
			})
		case packageActions.DELETE_DOCUMENT_LOADING:
			return state.merge({
				deleteDocument: stateUtility.getObserverLoading(),
			})
		case packageActions.DELETE_DOCUMENT_FULFILLED:
			return state.merge({
				deleteDocument: stateUtility.getObserverFulfilled(),
				documents: stateUtility.removeItemFromPagination(state.toJS().documents, action.payload),
			})
		case packageActions.DELETE_DOCUMENT_REJECTED:
			return state.merge({
				deleteDocument: stateUtility.getObserverRejected(action.payload),
			})
		// Update document
		case packageActions.UPDATE_DOCUMENT_BUILD_LOADING:
			return state.merge({
				createPackageDocument: stateUtility.getObserverLoading(),
				documents: stateUtility.removeJustItemInPegination(state.toJS().documents, action.documentId),
			})
		case packageActions.UPDATE_DOCUMENT_BUILD_FULFILLED:
			return state.merge({
				createPackageDocument: stateUtility.getObserverFulfilled(),
				documents: stateUtility.addItemToPagination(state.toJS().documents, action.payload, false),
			})
		case packageActions.SET_PACKAGE_IMAGE_URL:
			const packages = state.toJS().list
			const packageIndex = packages.data.findIndex((item) => item.id === action.id)
			packages.data[packageIndex].image = action.image_url.data
			return state.merge({
				list: packages,
			})
		case packageActions.SET_DOCUMENT_IMAGE_URL:
			const docs = state.toJS().documents
			const docIndex = docs.data.findIndex((document) => document.id === action.documentId)
			docs.data[docIndex].image = action.imageUrl.data
			return state.merge({
				documents: docs,
			})
		case packageActions.SET_DOCUMENT_PAGE_IMAGE_URL:
			const doccies = state.toJS().documents
			const doccyIndex = doccies.data.findIndex((document) => document.id === action.documentId)
			const paggyIndex = doccies.data[doccyIndex].pages.findIndex((page) => page.id === action.pageId)
			let images = doccies.data[doccyIndex].pages[paggyIndex].images
			if (images === undefined) {
				images = []
			}
			images.push(action.imageUrl.data)
			doccies.data[doccyIndex].pages[paggyIndex].images = images
			return state.merge({
				documents: doccies,
			})
		//  getRecipients
		case packageActions.GET_PACKAGE_RECIPIENTS_INITIAL_STATE:
			return state.merge({
				recipients: stateUtility.getPaginationInitialState(),
			})
		case packageActions.GET_PACKAGE_RECIPIENTS_LOADING:
			return state.merge({
				recipients: stateUtility.getPaginationLoading(),
			})
		case packageActions.GET_PACKAGE_RECIPIENTS_FULFILLED:
			return state.merge({
				recipients: stateUtility.getPaginationFulfilled(action.payload),
			})
		case packageActions.GET_PACKAGE_RECIPIENTS_REJECTED:
			return state.merge({
				recipients: stateUtility.getPaginationRejected(action.payload),
			})

		//	Delete recipient
		case packageActions.DELETE_PACKAGE_RECIPIENT_INITIAL_STATE:
			return state.merge({
				recipient: stateUtility.getObserverInitialState(),
			})
		case packageActions.DELETE_PACKAGE_RECIPIENT_LOADING:
			return state.merge({
				recipient: stateUtility.getObserverLoading(),
			})
		case packageActions.DELETE_PACKAGE_RECIPIENT_FULFILLED:
			return state.merge({
				recipient: stateUtility.getObserverFulfilled(),
			})
		case packageActions.DELETE_PACKAGE_RECIPIENT_REJECTED:
			return state.merge({
				recipient: stateUtility.getObserverRejected(action.payload),
			})

		//  createRecipient
		case packageActions.CREATE_PACKAGE_RECIPIENT_INITIAL_STATE:
			return state.merge({
				recipient: stateUtility.getItemInitialState(),
			})
		case packageActions.CREATE_PACKAGE_RECIPIENT_LOADING:
			return state.merge({
				recipient: stateUtility.getItemLoading(),
			})
		case packageActions.CREATE_PACKAGE_RECIPIENT_FULFILLED:
			return state.merge({
				recipient: stateUtility.getItemFulfilled(action.payload),
			})
		case packageActions.CREATE_PACKAGE_RECIPIENT_REJECTED:
			return state.merge({
				recipient: stateUtility.getItemRejected(action.payload),
			})

		//  updateRecipient
		case packageActions.UPDATE_PACKAGE_RECIPIENT_INITIAL_STATE:
			return state.merge({
				recipient: stateUtility.getItemInitialState(),
			})
		case packageActions.UPDATE_PACKAGE_RECIPIENT_LOADING:
			return state.merge({
				recipient: stateUtility.getItemLoading(),
			})
		case packageActions.UPDATE_PACKAGE_RECIPIENT_FULFILLED:
			return state.merge({
				recipient: stateUtility.getItemFulfilled(action.payload),
			})
		case packageActions.UPDATE_PACKAGE_RECIPIENT_REJECTED:
			return state.merge({
				recipient: stateUtility.getItemRejected(action.payload),
			})
		//  myRecipient
		case packageActions.GET_MY_RECIPIENT_INITIAL_STATE:
			return state.merge({
				recipient: stateUtility.getItemInitialState(),
			})
		case packageActions.GET_MY_RECIPIENT_LOADING:
			return state.merge({
				recipient: stateUtility.getItemLoading(),
			})
		case packageActions.GET_MY_RECIPIENT_FULFILLED:
			return state.merge({
				recipient: stateUtility.getItemFulfilled(action.payload),
			})
		case packageActions.GET_MY_RECIPIENT_REJECTED:
			return state.merge({
				recipient: stateUtility.getItemRejected(action.payload),
			})

		case packageActions.GET_AUDIT_TRAIL_INITIAL_STATE:
			return state.merge({
				documents: stateUtility.getPaginationInitialState(),
			})
		case packageActions.GET_AUDIT_TRAIL_LOADING:
			return state.merge({
				documents: stateUtility.getPaginationLoading(),
			})
		case packageActions.GET_AUDIT_TRAIL_FULFILLED:
			return state.merge({
				documents: stateUtility.getPaginationFulfilled(action.payload),
			})
		case packageActions.GET_AUDIT_TRAIL_REJECTED:
			return state.merge({
				documents: stateUtility.getPaginationRejected(action.payload),
			})

		default:
			return state
	}
}
