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
	Item,
	NotificationPreference,
	Observer,
	Package,
	PackageType,
	Page,
	Pagination,
	Plan,
	Recipient,
	Signature,
	Subscription,
	User,
	UserMeta,
} from '../../types'

export interface AccountsState {
	list: Pagination<Account>
	item: Item<Account>
	users: Pagination<User>
	defaultAccount: Item<Account>
	setDefaultAccount: Observer
	createAccount: Item<Account>
	deleteAccountMember: Observer
	updateAccountMember: Observer
	updateAccount: Observer
	updatePhoto: Observer
	invoices: Pagination<Invoice>
}

export interface AccountInvitesState {
	list: Pagination<AccountInvite>
	getMyAccountInvites: Pagination<AccountInvite>
	item: Item<AccountInvite>
	deleteAccountInvite: Observer
	acceptAccountInvite: Observer
	createAccountInvite: Item<AccountInvite>
}

export interface AuthState {
	accessToken: Item<AccessToken>
	user: Item<User>
	meta: Item<UserMeta>
	updateUser: Observer
	createUser: Observer
	updatePhoto: Observer
}

export interface CardsState {
	list: Pagination<Card>
	item: Item<Card>
	createCard: Observer
	updateCard: Observer
	deleteCard: Observer
	setDefaultCard: Observer
}

export interface ConnectedServicesState {
	list: Pagination<ConnectedService>
	item: Item<ConnectedService>
	connected: Array<ConnectedService>
	available: Array<ConnectedService>
}

export interface DocumentsState {
	list: Pagination<Document>
	download: Observer
}

export interface FieldsState {
	list: Pagination<Field>
	item: Item<Field>
}

export interface FieldTypesState {
	list: Pagination<Field>
}

export interface FoldersState {
	list: Pagination<Folder>
	item: Item<Folder>
	createFolder: Observer
	updateFolder: Observer
}

export interface NotificationsState {
	snackBar
	list: Pagination<Notification>
	totalUnreadNotifications: number
	item: Item<Notification>
	updateNotification: Observer
	deleteNotification: Observer
	connectToNotificationService: Observer
	subscribeToUserEvents: Observer
}

export interface PackagesState {
	list: Pagination<Package>
	lexicon: Item<Package>
	item: Item<Package>
	recipients: Pagination<Recipient>
	documents: Pagination<Document>
	pages: Pagination<Page>
	createPackageDocument: Observer
	deleteDocument: Observer
	createPackage: Observer
	recipient: Observer
}

export interface PackageTypesState {
	list: Pagination<PackageType>
}

export interface PagesState {
	list: Pagination<Page>
}

export interface PlansState {
	list: Pagination<Plan>
}

export interface SignaturesState {
	list: Pagination<Signature>
	item: Item<Signature>
}

export interface SubscriptionsState {
	list: Pagination<Subscription>
	item: Item<Subscription>
}

export interface UsersState {
	updatePassword: Observer
	resendEmailConfirmation: Observer
	notificationPreferences: Item<NotificationPreference>
	getNotificationPreferences: Observer
	updateNotificationPreferences: Observer
	confirmEmail: Observer
}
