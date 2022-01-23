import React from 'react'
import type { DateProps } from '@helper/types'
import Date from '@components/Date/Date'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const dateMockupList: DateProps[] = [
	{ day: 'M', date: 17 },
	{ day: 'T', date: 18, type: 'selected' },
	{ day: 'W', date: 19, type: 'current' },
	{ day: 'TH', date: 20, type: 'disabled' },
	{ day: 'F', date: 21, type: 'disabled' },
	{ day: 'S', date: 22, type: 'disabled' },
	{ day: 'S', date: 23, type: 'disabled' },
]

function DateTab() {
	return (
		<>
			<div className="flex flex-row items-end text-secondary">
				<AiOutlineLeft className="mb-2" />
				<div className="flex flex-row flex-auto justify-between">
					{dateMockupList.map((record: DateProps, index: number) => (
						<Date
							key={index}
							day={record.day}
							date={record.date}
							type={record.type}
						/>
					))}
				</div>
				<AiOutlineRight className="mb-2" />
				<span className="text-primary text-xs inline-block mb-2 ml-2 font-semibold">
					↓Today
				</span>
			</div>
		</>
	)
}

export default DateTab
