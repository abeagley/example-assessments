import { toggleRoom, updateRoom, ActionTypeNames } from './actions'

describe('Rooms Reducer Actions', () => {
  test('#toggleRoom should return a properly structured action', () => {
    const payload = {
      index: 0
    }

    expect(toggleRoom(payload)).toEqual({
      type: ActionTypeNames.TOGGLE_ROOM,
      payload
    })
  })

  test('#updateRoom should return a properly structured action', () => {
    const payload = {
      property: 'adults',
      count: 1,
      index: 0
    }

    expect(updateRoom(payload)).toEqual({
      type: ActionTypeNames.UPDATE_ROOM,
      payload
    })
  })
})
