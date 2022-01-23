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
