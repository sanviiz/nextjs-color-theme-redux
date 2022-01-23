import React from 'react'
import type { BottomBarItemProps } from '@helper/types'

function BottomBarItem({ icon, text, active = false }: BottomBarItemProps) {
	return (
		<>
			<div
				className={`flex flex-col items-center cursor-pointer ${
					active ? 'text-primaryText' : 'text-secondaryText'
				}`}
			>
				{icon}
				<span className="text-[10px]">{text}</span>
			</div>
		</>
	)
}

export default BottomBarItem
