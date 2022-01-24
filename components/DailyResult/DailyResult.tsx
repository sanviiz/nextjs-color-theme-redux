import React from 'react'
import CountUp from 'react-countup'
import type { DailyCardResultProps } from '@helper/types'
import { useDispatch, useSelector } from 'react-redux'
import { mockDetail } from '@redux/actions'
import { getDetailState } from '@redux/selector'
import {
	AiOutlineLike,
	AiOutlineComment,
	AiOutlineGift,
	AiOutlineSketch,
} from 'react-icons/ai'

const DailyCardResult = ({ icon, type, total, unit }: DailyCardResultProps) => {
	return (
		<>
			<div className="pt-6 pb-12 border border-borderColor rounded-md flex flex-col gap-y-6 justify-between items-center">
				<div className="text-lg text-primary font-medium">
					{icon}
					{type}
				</div>
				<div className="flex flex-col items-center gap-y-2">
					<CountUp
						className="inline text-4xl font-semibold"
						end={total}
						duration={1}
					/>
					<span className="text-sm text-gray-400 font-semibold">
						{unit ?? type}
					</span>
				</div>
			</div>
		</>
	)
}

const DailyResult = () => {
	const dispatch = useDispatch()
	const details = useSelector(getDetailState)

	React.useEffect(() => {
		dispatch(mockDetail())
	}, [])

	return (
		<>
			<div className="px-8">
				<div className="grid grid-cols-2 gap-4">
					<DailyCardResult
						icon={
							<AiOutlineLike className="inline-block text-xl mb-1 mr-1" />
						}
						type="Like"
						total={details.like}
						unit="Likes"
					/>
					<DailyCardResult
						icon={
							<AiOutlineComment className="inline-block text-xl mb-1 mr-1" />
						}
						type="Comment"
						total={details.comment}
						unit="Comments"
					/>
					<DailyCardResult
						icon={
							<AiOutlineGift className="inline-block text-xl mb-1 mr-1" />
						}
						type="Point"
						total={details.point}
					/>
					<DailyCardResult
						icon={
							<AiOutlineSketch className="inline-block text-xl mb-1 mr-1" />
						}
						type="Diamond"
						total={details.diamond}
					/>
				</div>
			</div>
		</>
	)
}

export default DailyResult
