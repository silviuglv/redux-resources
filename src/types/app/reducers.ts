import {
	AccessToken,
	Account,
	AccountInvite,
	Card,
	ConnectedService,
	Document,
	Field,
	Folder,
	Invoice,
	ItemResponse,
	NotificationPreference,
	Observer,
	Package,
	PackageType,
	RecipientType,
	PackageStatus,
	Page,
	PaginatedResponse,
	Plan,
	Recipient,
	Signature,
	Subscription,
	User,
	UserMeta,
	CustomizationType,
	Customization,
} from '../../types'
import { FieldTypePreset } from '../api'
export interface AccountsState {
	list: PaginatedResponse<Account>
	item: ItemResponse<Account>
	users: PaginatedResponse<User>
	defaultAccount: ItemResponse<Account>
	accountCustomizations: PaginatedResponse<Customization>
	createCustomization: ItemResponse<Customization>
	updateCustomization: ItemResponse<Customization>
	customization: ItemResponse<Customization>
	deleteCustomization: Observer
	customizationTypes: PaginatedResponse<CustomizationType>
	setDefaultAccount: Observer
	createAccount: ItemResponse<Account>
	deleteAccountMember: Observer
	updateAccountMember: Observer
	updateAccount: Observer
	invoices: PaginatedResponse<Invoice>
}

export interface CustomizationsState {
	list: PaginatedResponse<Customization>
	item: ItemResponse<Customization>
	customizationTypes: PaginatedResponse<CustomizationType>
	createCustomization: ItemResponse<Customization>
	updateCustomization: ItemResponse<Customization>
	updateCustomizationByType: ItemResponse<Customization>
	deleteCustomization: Observer
}
export interface AccountInvitesState {
	list: PaginatedResponse<AccountInvite>
	getMyAccountInvites: PaginatedResponse<AccountInvite>
	item: ItemResponse<AccountInvite>
	deleteAccountInvite: Observer
	acceptAccountInvite: Observer
	createAccountInvite: ItemResponse<AccountInvite>
}

export interface AuthState {
	accessToken: ItemResponse<AccessToken>
	user: ItemResponse<User>
	meta: ItemResponse<UserMeta>
	updateUser: Observer
	createUser: Observer
	updatePhoto: Observer
}

export interface CardsState {
	list: PaginatedResponse<Card>
	item: ItemResponse<Card>
	createCard: Observer
	updateCard: Observer
	deleteCard: Observer
	setDefaultCard: Observer
}

export interface ConnectedServicesState {
	list: PaginatedResponse<ConnectedService>
	item: ItemResponse<ConnectedService>
	connected: Array<ConnectedService>
	available: Array<ConnectedService>
}

export interface DocumentsState {
	list: PaginatedResponse<Document>
	download: Observer
}

export interface FieldsState {
	list: PaginatedResponse<Field>
	item: ItemResponse<Field>
}

export interface FieldTypesState {
	list: PaginatedResponse<Field>
	presets: PaginatedResponse<FieldTypePreset>
	createPreset: Observer
	updatePreset: Observer
	deletePreset: Observer
}

export interface FoldersState {
	list: PaginatedResponse<Folder>
	item: ItemResponse<Folder>
	createFolder: Observer
	updateFolder: Observer
}

export interface NotificationsState {
	snackBar
	list: PaginatedResponse<Notification>
	totalUnreadNotifications: number
	item: ItemResponse<Notification>
	updateNotification: Observer
	deleteNotification: Observer
	connectToNotificationService: Observer
	subscribeToUserEvents: Observer
}

export interface PackagesState {
	list: PaginatedResponse<Package>
	lexicon: ItemResponse<Package>
	item: ItemResponse<Package>
	recipients: PaginatedResponse<Recipient>
	documents: PaginatedResponse<Document>
	pages: PaginatedResponse<Page>
	createPackageDocument: Observer
	deleteDocument: Observer
	createPackage: Observer
	recipient: Observer
	resendSignatureEmail: Observer
}

export interface PackageTypesState {
	list: PaginatedResponse<PackageType>
}

export interface PackageStatusesState {
	list: PaginatedResponse<PackageStatus>
}

export interface PagesState {
	list: PaginatedResponse<Page>
}

export interface PlansState {
	list: PaginatedResponse<Plan>
}

export interface SignaturesState {
	list: PaginatedResponse<Signature>
	item: ItemResponse<Signature>
}

export interface SubscriptionsState {
	list: PaginatedResponse<Subscription>
	item: ItemResponse<Subscription>
}

export interface UsersState {
	updatePassword: Observer
	resendEmailConfirmation: Observer
	notificationPreferences: ItemResponse<NotificationPreference>
	getNotificationPreferences: Observer
	updateNotificationPreferences: Observer
	confirmEmail: Observer
}

export interface RecipientsState {
	recipientTypes: PaginatedResponse<RecipientType>
	recipients: PaginatedResponse<Recipient>
	decline: Observer
	complete: Observer
	messageSender: Observer
}

export interface RecipientTypesState {
	list: PaginatedResponse<RecipientType>
}

export interface CustomizationTypesState {
	list: PaginatedResponse<Customization>
}
