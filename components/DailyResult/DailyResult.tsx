import React from 'react'
import type { DailyCardResult } from '@helper/types'
import {
	AiOutlineLike,
	AiOutlineComment,
	AiOutlineGift,
	AiOutlineSketch,
} from 'react-icons/ai'

const CardResult = ({ icon, type, total, unit }: DailyCardResult) => {
	return (
		<>
			<div className="pt-6 pb-12 border border-borderColor rounded-md flex flex-col gap-y-6 justify-between items-center">
				<div className="text-lg text-primary font-medium">
					{icon}
					{type}
				</div>
				<div className="flex flex-col items-center gap-y-2">
					<span className="text-4xl font-semibold">{total}</span>
					<span className="text-sm text-gray-400 font-semibold">
						{unit ?? type}
					</span>
				</div>
			</div>
		</>
	)
}

const DailyResult = () => {
	return (
		<>
			<div className="px-8">
				<div className="grid grid-cols-2 gap-4">
					<CardResult
						icon={
							<AiOutlineLike className="inline-block text-xl mb-1 mr-1" />
						}
						type="Like"
						total={34}
						unit="Likes"
					/>
					<CardResult
						icon={
							<AiOutlineComment className="inline-block text-xl mb-1 mr-1" />
						}
						type="Comment"
						total={56}
						unit="Comments"
					/>
					<CardResult
						icon={
							<AiOutlineGift className="inline-block text-xl mb-1 mr-1" />
						}
						type="Point"
						total={450}
					/>
					<CardResult
						icon={
							<AiOutlineSketch className="inline-block text-xl mb-1 mr-1" />
						}
						type="Diamond"
						total={40}
					/>
				</div>
			</div>
		</>
	)
}

export default DailyResult
