import { createStore, combineReducers } from 'redux'

import { detailReducer } from '@redux/reducer'

const rootReducer = combineReducers({
	detailReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default function configureStore() {
	const store = createStore(rootReducer)

	return store
}
