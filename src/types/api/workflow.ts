export interface Action {
    id: string
    name: string
}

export interface PackageWorkflow {
    id: string
    type: string
    created_at
    completed_at        // nullable
}

export interface Trigger {
    id: string
    name: string
    actions: [Action]
}
