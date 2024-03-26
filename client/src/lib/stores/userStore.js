import { persisted } from 'svelte-persisted-store'

export const currentUser = persisted('currentUser', null)