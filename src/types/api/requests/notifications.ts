import { BaseGetRequest } from './types'

export interface GetNotificationsRequest extends BaseGetRequest {
	is_read?: boolean
	order_by?: 'id' | 'type' | 'read_at' | 'created_at'
}

export interface UpdateNotificationRequest {
	is_read: boolean
}
