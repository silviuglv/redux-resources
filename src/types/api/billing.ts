import {Account, Country} from "./cms";

export interface Card {
    id: string
    name: string
    nickname: string | null
    last4: string
    exp_month: string
    exp_year: number
    brand: string
    funding: string
    address_zip: string
    is_default: boolean
    country: Country
    account_id: string
}

export interface Invoice {
    id: string
    invoice_url: string
    total: number
    subtotal: number
    tax: number
    amount_remaining: number
    attempted: boolean
    is_paid: boolean
    card: Card
    subscription: Subscription
    created_at
    period_start
    period_end
}

export interface Plan {
    id: string
    nickname: string
    amount: number
    interval: string | null
    interval_count: number | null
    usage_type: string | null
    is_active: boolean
    features: []
    max_users: number
    max_monthly_documents: number | null
}

export interface Subscription {
    id: string
    quantity: number
    is_active: boolean
    trial_ends_at
    ends_at
    cancelled_at
    created_at
    account: Account
    plan: Plan
}
