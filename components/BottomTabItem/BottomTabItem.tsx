import React from 'react'
import type { BottomTabItemProps } from '@helper/types'

function BottomTabItem({ icon, text, active = false }: BottomTabItemProps) {
	return (
		<>
			<div
				className={`flex flex-col items-center bg-white ${
					active ? 'text-primary' : 'text-secondary'
				}`}
			>
				{icon}
				<span className="text-[10px]">{text}</span>
			</div>
		</>
	)
}

export default BottomTabItem
