import React from 'react'
import BottomBarItem from '@components/BottomBarItem/BottomBarItem'
import {
	AiOutlinePlusSquare,
	AiFillCheckCircle,
	AiTwotoneSetting,
	AiFillPieChart,
	AiFillNotification,
} from 'react-icons/ai'

function BottomBar() {
	return (
		<>
			<div className="fixed bottom-0 border-t border-borderColor pt-4 pb-4 px-6 flex justify-between w-full">
				<BottomBarItem
					icon={<AiOutlinePlusSquare className="text-lg" />}
					text="Write"
				/>
				<BottomBarItem
					icon={<AiFillCheckCircle className="text-lg" />}
					text="Approval"
				/>
				<BottomBarItem
					icon={<AiFillNotification className="text-lg" />}
					text="Report"
				/>
				<BottomBarItem
					icon={<AiFillPieChart className="text-lg" />}
					text="Statistic"
					active
				/>
				<BottomBarItem
					icon={<AiTwotoneSetting className="text-lg" />}
					text="Setting"
				/>
			</div>
		</>
	)
}

export default BottomBar
