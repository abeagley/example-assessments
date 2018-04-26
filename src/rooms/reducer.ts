import Actions, { ActionTypeNames } from './actions'

const existingRooms = localStorage.getItem('rooms')

export interface Room {
  active: boolean
  adults: number
  children: number
}

export interface State {
  data: Room[]
}

export const defaultState: State = {
  data: (existingRooms)
    ? JSON.parse(existingRooms)
    : [
      {
        active: true,
        adults: 1,
        children: 0
      },
      {
        active: false,
        adults: 1,
        children: 0
      },
      {
        active: false,
        adults: 1,
        children: 0
      },
      {
        active: false,
        adults: 1,
        children: 0
      }
    ]
}

export default (state: State = defaultState, action: Actions): State => {
  let target = 0

  switch (action.type) {
    case ActionTypeNames.TOGGLE_ROOM:
      target = action.payload.index
      const existing = state.data[target]

      return {
        data: state.data.map((room, idx) => {
          if (idx !== target) {
            if (existing.active) {
              // we'll be disabling future rooms
              return (idx > target) ? { adults: 1, children: 0, active: false } : { ...room, active: true }
            } else {
              return (idx < target) ? { ...room, active: true } : { adults: 1, children: 0, active: false }
            }
          }

          return (existing.active) ? { adults: 1, children: 0, active: false } : { ...room, active: true }
        })
      }

    case ActionTypeNames.UPDATE_ROOM:
      target = action.payload.index

      return {
        data: state.data.map((room, idx) => {
          if (idx !== target) {
            return room
          }

          return {
            ...room,
            active: true,
            [action.payload.property]: action.payload.count
          } as any
        })
      }

    default:
      return state
  }
}
