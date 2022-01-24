import { DetailState, DetailAction, DetailActionInterface } from '@helper/types'

const initialState: DetailState = {
	details: {
		like: 0,
		comment: 0,
		point: 0,
		diamond: 0,
	},
}

export function detailReducer(
	state = initialState,
	action: DetailActionInterface
) {
	switch (action.type) {
		case DetailAction.GET_DETAILS:
			return { details: action.payload }
		default:
			return state
	}
}
