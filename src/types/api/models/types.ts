export type FeedbackTypes = 'design-improvements' | 'feature-request' | 'bug-report'

export type AccountRoles = 'full_access' | 'basic_access' | 'read_only'

// export type BoardroomRoles =
// 	| 'designated_signer'
// 	| 'designated_viewer'
// 	| 'board_member'
// 	| 'account_manager'
// 	| 'team_member'
// 	| 'team_manager'

export type FieldTypes =
	| 'Signature'
	| 'Initials'
	| 'Date'
	| 'Text Field'
	| 'Paragraph'
	| 'Radio'
	| 'Checkbox'
	| 'Single Choice'
	| 'Multiple Choice'
	| 'Dropdown'
	| 'Date Signed'
	| 'Number'

// export type PackageStatusTypes = 'Draft' | 'Awaiting Signature' | 'Complete' | 'Cancelled'

//export type PackageTypes = 'Just Me' | 'Contacts' | 'Website Visitors'

//export type RecipientTypes = 'signer' | 'viewer'

export type ProviderTypes = 'google' | 'dropbox' | 'approveme' | 'box'

export type SignatureTypes = 'signature' | 'initials'
