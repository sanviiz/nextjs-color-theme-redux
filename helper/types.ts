export type BottomTabItemProps = {
	icon: JSX.Element
	text: string
	active?: Boolean
}

export type DateProps = {
	day: string
	date: number
	type?: 'current' | 'selected' | 'disabled'
}

export type DailyCardResultProps = {
	icon: JSX.Element
	type: string
	total: number
	unit?: string
}

export type Detail = {
	like: number
	comment: number
	point: number
	diamond: number
}

export enum DetailAction {
	GET_DETAILS = 'GET_DETAILS',
}

export interface DetailState {
	details: Detail
}

export interface DetailActionInterface {
	type: DetailAction
	payload: Detail
}
