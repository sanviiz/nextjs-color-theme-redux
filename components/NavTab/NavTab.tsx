import React from 'react'

function NavTab() {
	return (
		<>
			<div className="border-b border-borderColor flex py-3 font-semibold text-secondaryText">
				<div className="w-1/2 flex justify-center items-center cursor-pointer">
					Submission
				</div>
				<div className="border-r border-borderColor" />
				<div className="w-1/2 flex justify-center items-center cursor-pointer text-primaryText">
					Engagement
				</div>
			</div>
		</>
	)
}

export default NavTab
