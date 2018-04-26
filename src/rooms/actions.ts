export enum ActionTypeNames {
  TOGGLE_ROOM = 'TOGGLE_ROOM',
  UPDATE_ROOM = 'UPDATE_ROOM'
}

export interface ToggleRoomPayload {
  index: number
}

export interface UpdateRoomPayload {
  index: number
  property: string
  count: number
}

export interface ToggleRoom { type: ActionTypeNames.TOGGLE_ROOM, payload: ToggleRoomPayload }
export const toggleRoom = (payload: ToggleRoomPayload): ToggleRoom => ({
  payload,
  type: ActionTypeNames.TOGGLE_ROOM
})

export interface UpdateRoom { type: ActionTypeNames.UPDATE_ROOM, payload: UpdateRoomPayload }
export const updateRoom = (payload: UpdateRoomPayload): UpdateRoom => ({
  payload,
  type: ActionTypeNames.UPDATE_ROOM
})

type ActionTypes = UpdateRoom
  | ToggleRoom

export default ActionTypes
