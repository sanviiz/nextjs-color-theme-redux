import React from 'react'
import DailyResult from '@components/DailyResult/DailyResult'
import { AiOutlineUpload } from 'react-icons/ai'

const HeaderResult = () => {
	return (
		<>
			<div className="flex items-center justify-between px-8 py-6">
				<span className="font-medium">18 December 2019</span>
				<AiOutlineUpload className="text-2xl text-primary" />
			</div>
		</>
	)
}

const QueryResult = () => {
	return (
		<>
			<div className="pb-8">
				<HeaderResult />
				<DailyResult />
			</div>
		</>
	)
}

export default QueryResult
