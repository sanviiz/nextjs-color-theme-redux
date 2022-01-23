import React from 'react'
import type { DateProps } from '@helper/types'

function Date({ date, day, type }: DateProps) {
	const styleByType =
		type === 'current'
			? 'border-primary'
			: type === 'selected'
			? 'border-primary text-white bg-primary'
			: type === 'disabled'
			? 'text-secondary border-none'
			: 'border-none'

	return (
		<>
			<div className="flex flex-col w-fit items-center gap-y-1 text-black">
				<span className="font-semibold text-xs">{day}</span>
				<div
					className={`font-semibold border rounded-full aspect-square w-8 flex items-center justify-center ${styleByType}`}
				>
					{date}
				</div>
			</div>
		</>
	)
}

export default Date
