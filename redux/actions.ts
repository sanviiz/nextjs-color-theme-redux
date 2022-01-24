import { DetailAction, DetailActionInterface } from '@helper/types'

export function mockDetail(): DetailActionInterface {
	return {
		type: DetailAction.GET_DETAILS,
		payload: {
			like: 34,
			comment: 56,
			point: 450,
			diamond: 40,
		},
	}
}
