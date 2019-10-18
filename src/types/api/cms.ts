export interface Account {
    id: string
    name: string
    owner: User
    image_url: string | null
    role: string | undefined
}

export interface AccountInvite {
    id: string
    name: string
    email: string
    role: string
    custom_message: string | null
    account: Account
    created_by: User
    joined_at: string | null
    created_at
}

export interface Address {
    id: string
    street1: string
    street2: string | null
    city: string | null
    postal_code: string | null
    state_province: string | null
    country: Country | null
    is_primary: boolean
}

export interface ConfirmationToken {
    id: string
    token: string
    expires_at
    user: User
}

export interface ConnectedService {
    id: string
    provider: string
    email: string
    scopes: string | null
    url: string | null
    created_at
}

export interface Country {
    id: string
    name: string
    code: string
}

export interface Feedback {
    id: string
    type: string
    user_id: string
    content: string
    created_at
}

export interface Notification {
    id: string
    type: string
    notifiable_type: string
    notifiable_id: number
    data: []
    read_at     //  nullable
    created_at
    updated_at
}

export interface NotificationPreference {
    id: string
    account_invite_received_email: boolean
    account_invite_accepted_email: boolean
    account_invite_rejected_email: boolean
    user_id: string
}

export interface Role {
    id: string
    name: string
}

export interface Signature {
    id: string
    type: string
    user_id: string
    image: string | null
    created_at
}

export interface User {
    id: string
    first_name: string
    last_name: string
    email: string
    image_url: string | null
    role: string | null
    joined_at   //  nullable
}

export interface UserMeta {
    email_confirmed: boolean
    created_at
    updated_at
}
