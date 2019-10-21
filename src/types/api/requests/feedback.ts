import { FeedbackTypes } from '../models'

export interface CreateFeedbackRequest {
	type: FeedbackTypes
	content: string
}
