import React from 'react'
import { AiFillHome, AiFillSliders } from 'react-icons/ai'

const Header = () => {
	return (
		<>
			<div className="sticky top-0 bg-headerBackground text-headerText flex flex-row items-end justify-between pt-16 pb-6 px-4">
				<AiFillHome className="text-2xl" />
				<span className="text-lg font-semibold leading-5">
					All Report
				</span>
				<AiFillSliders className="text-2xl" />
			</div>
		</>
	)
}

export default Header
