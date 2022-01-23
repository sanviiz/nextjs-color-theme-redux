import React from 'react'

function DateTypeTab() {
	return (
		<>
			<div className="inline-flex justify-between flex-auto text-sm text-secondary font-semibold border-b border-borderColor">
				<div className="pb-1 px-1 border-b-2 border-primary text-black">
					Daily
				</div>
				<div className="pb-1 px-1">Weekly</div>
				<div className="pb-1 px-1">Monthly</div>
			</div>
		</>
	)
}

export default DateTypeTab
