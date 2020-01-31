import axios from 'axios'
import config from '../config'
import {
	GetPackagesRequest,
	GetPackageLexiconRequest,
	CreatePackageRequest,
	UpdatePackageRequest,
	GetFieldsRequest,
	CreateDocumentRequest,
	CreateDocumentBuildRequest,
	CreateDocumentRenderFieldsRequest,
	UpdateDocumentRequest,
} from '../types'

export const packageApi = {
	getPackages: (params: GetPackagesRequest) => {
		return axios({
			url: `${config.apiBase}/packages`,
			method: 'GET',
			params,
		})
	},
	getPackageLexicon: (params: GetPackageLexiconRequest) => {
		return axios({
			url: `${config.apiBase}/packages/lexicon`,
			method: 'GET',
			params,
		})
	},
	showPackage: (id: string) => {
		return axios({
			url: `${config.apiBase}/packages/${id}`,
			method: 'GET',
		})
	},
	deletePackage: (id: string) => {
		return axios({
			url: `${config.apiBase}/packages/${id}`,
			method: 'DELETE',
		})
	},
	createPackage: (data: CreatePackageRequest) => {
		return axios({
			url: `${config.apiBase}/packages`,
			method: 'POST',
			data,
		})
	},
	updatePackage: (id: string, data: UpdatePackageRequest) => {
		return axios({
			url: `${config.apiBase}/packages/${id}`,
			method: 'PUT',
			data,
		})
	},
	getDocuments: (id: string, params = {}) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/documents`,
			method: 'GET',
			params,
		})
	},
	getPages: (packageId: string, params = {}) => {
		return axios({
			url: `${config.apiBase}/packages/${packageId}/pages`,
			method: 'GET',
			params,
		})
	},
	getFields: (packageId: string, params: GetFieldsRequest = {}) => {
		return axios({
			url: `${config.apiBase}/packages/${packageId}/fields`,
			method: 'GET',
			params,
		})
	},
	createDocuments: (id: string, data: CreateDocumentRequest) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/documents`,
			method: 'POST',
			data,
		})
	},
	createDocumentsBuild: (id: string, data: CreateDocumentBuildRequest) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/documents/build`,
			method: 'POST',
			data,
		})
	},
	createDocumentRenderFields: (id: string, data: CreateDocumentRenderFieldsRequest) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/documents/render`,
			method: 'POST',
			data,
		})
	},
	updateDocument: (packageId: string, documentId: string, data: UpdateDocumentRequest) => {
		return axios({
			url: `${config.apiBase}/packages/${packageId}/documents/${documentId}`,
			method: 'PUT',
			data,
		})
	},
	createDocumentFromSocialAccount: (id: string, socialAccountId: string, externalFileId: string) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/documents/connected_services/${socialAccountId}`,
			method: 'POST',
			data: {
				external_file_id: externalFileId,
			},
		})
	},
	downloadDocument: (id: string, documentId: string) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/documents/${documentId}`,
			method: 'GET',
			headers: { Accept: 'application/pdf' },
			responseType: 'blob',
		})
	},
	getDocumentPageImageUrl: (url: string) => {
		return axios({
			url,
			method: 'GET',
			headers: { Accept: 'image/png' },
		})
	},
	deleteDocument: (id: string, documentId: string) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/documents/${documentId}`,
			method: 'DELETE',
		})
	},
	publish: (id: string) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/publish`,
			method: 'PUT',
		})
	},
	resendSigningEmail: (id: string) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/signature_email`,
			method: 'PUT',
		})
	},
}
