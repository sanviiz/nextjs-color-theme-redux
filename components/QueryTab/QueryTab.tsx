import React from 'react'
import DateTypeTab from '@components/DateTypeTab/DateTypeTab'
import DateTab from '@components/DateTab/DateTab'
import {
	AiOutlineLineChart,
	AiOutlineBars,
	AiOutlineDown,
} from 'react-icons/ai'

const DataTypeSelector = () => {
	return (
		<>
			<div className="text-secondary">
				<AiOutlineLineChart className="inline-block mr-4 text-3xl text-primary" />
				<AiOutlineBars className="inline-block text-3xl" />
			</div>
		</>
	)
}

const SectionExpand = () => {
	return (
		<div className="absolute border border-borderColor aspect-square w-5 inline-flex justify-center items-center bg-white rounded-full mt-2">
			<AiOutlineDown className="text-sm" />
		</div>
	)
}

const QueryTab = () => {
	return (
		<>
			<div className="border-b border-borderColor pt-6 pb-4 px-2.5 bg-white sticky top-[169px]">
				<div className="relative text-center">
					<div className="flex justify-between items-center pl-6 pr-2 gap-x-8 mb-6">
						<DateTypeTab />
						<DataTypeSelector />
					</div>
					<DateTab />
					<SectionExpand />
				</div>
			</div>
		</>
	)
}

export default QueryTab
