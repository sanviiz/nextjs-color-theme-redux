import React from 'react'

function NavTab() {
	return (
		<>
			<div className="border-b border-borderColor bg-white flex py-4 font-semibold text-secondary">
				<div className="w-1/2 flex justify-center items-center cursor-pointer">
					Submission
				</div>
				<div className="border-r border-borderColor" />
				<div className="w-1/2 flex justify-center items-center cursor-pointer text-primary">
					Engagement
				</div>
			</div>
		</>
	)
}

export default NavTab
