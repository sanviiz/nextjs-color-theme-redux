import { RootState } from '@redux/store'

export function getDetailState(state: RootState) {
	return state.detailReducer.details
}
