import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { initializeCurrentLocation } from 'redux-little-router'

import rooms, { State as RoomsState } from './rooms/reducer'
import router, { Router } from './router'

export interface AppState {
  rooms: RoomsState
  router: Router
}

const store = createStore(
  combineReducers({
    rooms: rooms,
    router: router.reducer
  }),
  {},
  compose(
    router.enhancer,
    applyMiddleware(router.middleware),
    window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
  )
)

const initialLocation = (store.getState() as AppState).router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation as any))
}

export default store
