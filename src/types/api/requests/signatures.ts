import { SignatureTypes } from '../models'

export interface CreateSignatureRequest {
	type: SignatureTypes
	image
}
