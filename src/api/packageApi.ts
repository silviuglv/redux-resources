import axios from 'axios'
import config from '../config'
import { keysToSnakeCase } from '../utilities'
import {
	GetPackagesRequest,
	GetPackageLexiconRequest,
	CreatePackageRequest,
	UpdatePackageRequest,
	GetFieldsRequest,
	CreateDocumentRequest,
	CreateDocumentBuildRequest,
	UpdateDocumentBuildRequest,
	UpdateDocumentRequest,
	CreateRecipientRequest,
	UpdateRecipientRequest,
} from '../types'

export const packageApi = {
	getPackages: (params: GetPackagesRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages`,
			method: 'GET',
			params,
		})
	},
	getPackageLexicon: (params: GetPackageLexiconRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/lexicon`,
			method: 'GET',
			params,
		})
	},
	showPackage: (id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}`,
			method: 'GET',
		})
	},
	deletePackage: (id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}`,
			method: 'DELETE',
		})
	},
	createPackage: (data: CreatePackageRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages`,
			method: 'POST',
			data,
		})
	},
	updatePackage: (id: string, data: UpdatePackageRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}`,
			method: 'PUT',
			data,
		})
	},
	getDocuments: (id: string, params = {}) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/documents`,
			method: 'GET',
			params,
		})
	},
	getPages: (id: string, params = {}) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/pages`,
			method: 'GET',
			params,
		})
	},
	getFields: (id: string, params: GetFieldsRequest = {}) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/fields`,
			method: 'GET',
			params,
		})
	},
	createDocuments: (id: string, data: CreateDocumentRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/documents`,
			method: 'POST',
			data,
		})
	},
	createDocumentsBuild: (id: string, data: CreateDocumentBuildRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/documents/build`,
			method: 'POST',
			data,
		})
	},
	createDocumentsRenderPdf: (id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/documents/render`,
			method: 'POST',
		})
	},
	updateDocument: (id: string, document_id: string, data: UpdateDocumentRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/documents/${config.dev_env === true ? config.mockData.document_id : document_id}`,
			method: 'PUT',
			data,
		})
	},
	updateDocumentBuild: (id: string, document_id: string, data: UpdateDocumentBuildRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/documents/${config.dev_env === true ? config.mockData.document_id : document_id}/build`,
			method: 'PUT',
			data,
		})
	},
	createDocumentFromSocialAccount: (id: string, socialAccountId: string, externalFileId: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/documents/connected_services/${socialAccountId}`,
			method: 'POST',
			data: {
				external_file_id: externalFileId,
			},
		})
	},
	downloadDocument: (id: string, document_id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/documents/${config.dev_env === true ? config.mockData.document_id : document_id}`,
			method: 'GET',
			headers: { Accept: 'application/json' },
		})
	},
	getDocumentPageImageUrl: (url: string) => {
		return axios({
			url,
			method: 'GET',
			headers: { Accept: 'image/png' },
		})
	},
	deleteDocument: (id: string, document_id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/documents/${config.dev_env === true ? config.mockData.document_id : document_id}`,
			method: 'DELETE',
		})
	},
	publish: (id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/publish`,
			method: 'PUT',
		})
	},
	resendSigningEmail: (id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/signature_email`,
			method: 'PUT',
		})
	},
	getRecipients: (id: string, params: any = {}) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/recipients`,
			method: 'GET',
			params,
		})
	},
	createRecipient: (id: string, data: CreateRecipientRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/recipients`,
			method: 'POST',
			data: keysToSnakeCase(data),
		})
	},
	getMyRecipient: (id: string, recipientToken: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/recipients/me`,
			method: 'GET',
			headers: {
				Recipient: recipientToken,
			},
		})
	},
	updateRecipient: (id: string, recipient_id: string, data: UpdateRecipientRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/recipients/${config.dev_env === true ? config.mockData.recipient_id : recipient_id}`,
			method: 'PUT',
			data: keysToSnakeCase(data),
		})
	},
	deleteRecipient: (id: string, recipient_id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/recipients/${config.dev_env === true ? config.mockData.recipient_id : recipient_id}`,
			method: 'DELETE',
		})
	},
	getAuditTrail: (id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : id
			}/audit`,
			method: 'GET',
		})
	},
}
