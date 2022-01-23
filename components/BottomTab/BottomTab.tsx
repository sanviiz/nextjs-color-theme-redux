import React from 'react'
import BottomTabItem from '@components/BottomTabItem/BottomTabItem'
import {
	AiOutlineForm,
	AiFillCheckCircle,
	AiTwotoneSetting,
	AiFillPieChart,
	AiOutlineSend,
} from 'react-icons/ai'

function BottomTab() {
	return (
		<>
			<div className="sticky bottom-0 border-t border-borderColor pt-4 pb-4 px-6 flex justify-between w-full bg-white z-10">
				<BottomTabItem
					icon={<AiOutlineForm className="text-lg" />}
					text="Write"
				/>
				<BottomTabItem
					icon={<AiFillCheckCircle className="text-lg" />}
					text="Approval"
				/>
				<BottomTabItem
					icon={<AiOutlineSend className="text-lg" />}
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
