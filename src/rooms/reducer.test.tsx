import reducer, { defaultState, State } from './reducer'
import { ActionTypeNames } from './actions'

describe('Rooms Reducer Actions', () => {
  test('#reducer should return default state by default', () => {
    expect(reducer(defaultState, { type: 'Test' } as any)).toEqual(defaultState)
  })

  test('#reducer should activate a room when an action is dispatched', () => {
    expect(reducer(defaultState, { type: ActionTypeNames.TOGGLE_ROOM, payload: { index: 1 } }))
      .toEqual({
        data: defaultState.data.map((room, idx) => (idx === 1) ? { ...room, active: true } : room)
      })
  })

  test('#reducer should disable subsequent rooms when disabled', () => {
    const state: State = {
      data: defaultState.data.map((room, idx) => (idx === 1) ? { ...room, active: true } : room)
    }

    expect(reducer(state, { type: ActionTypeNames.TOGGLE_ROOM, payload: { index: 1 } }))
      .toEqual({
        data: defaultState.data.map((room, idx) => (idx === 2) ? { ...room, active: false } : room)
      })
  })

  test('#reducer should update a room when an action is dispatched', () => {
    expect(reducer(defaultState, { type: ActionTypeNames.UPDATE_ROOM, payload: { index: 1, property: 'adults', count: 2 } }))
      .toEqual({
        data: defaultState.data.map((room, idx) => (idx === 1) ? { adults: 2, children: 0, active: true } : room)
      })
  })

  test('#reducer should load existing localStorage data', () => {
    const rooms = defaultState.data.map((room) => ({
      ...room,
      adults: 2
    }))

    localStorage.setItem('rooms', JSON.stringify(rooms))

    const reducer = require('./reducer').default

    expect(reducer(rooms, { type: 'Test' } as any)).toEqual(rooms)

    localStorage.clear()
  })
})
