import React from 'react'
import BottomTabItem from '@components/BottomTabItem/BottomTabItem'
import {
	AiOutlinePlusSquare,
	AiFillCheckCircle,
	AiTwotoneSetting,
	AiFillPieChart,
	AiFillNotification,
} from 'react-icons/ai'

function BottomTab() {
	return (
		<>
			<div className="fixed bottom-0 border-t border-borderColor pt-4 pb-4 px-6 flex justify-between w-full">
				<BottomTabItem
					icon={<AiOutlinePlusSquare className="text-lg" />}
					text="Write"
				/>
				<BottomTabItem
					icon={<AiFillCheckCircle className="text-lg" />}
					text="Approval"
				/>
				<BottomTabItem
					icon={<AiFillNotification className="text-lg" />}
					text="Report"
				/>
				<BottomTabItem
					icon={<AiFillPieChart className="text-lg" />}
					text="Statistic"
					active
				/>
				<BottomTabItem
					icon={<AiTwotoneSetting className="text-lg" />}
					text="Setting"
				/>
			</div>
		</>
	)
}

export default BottomTab
