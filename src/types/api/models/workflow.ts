export interface Action {
	id: string
	name: string
}

export interface PackageWorkflow {
	id: string
	type: string
	created_at: string
	completed_at: string | null
}

export interface Trigger {
	id: string
	name: string
	actions: Array<Action>
}
