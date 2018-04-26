import * as React from 'react'
import { Link } from 'redux-little-router'
import { connect } from 'react-redux'

import RoomCard from './room-card/component'
import { AppState } from '../store'
import { Room } from './reducer'
import { Dispatch } from 'redux'
import Actions, { toggleRoom, ToggleRoomPayload, updateRoom, UpdateRoomPayload } from './actions'

export interface Props {
  rooms: Room[]
  toggleRoom (payload: ToggleRoomPayload): any
  updateRoom (payload: UpdateRoomPayload): any
}

export class RoomsContainer extends React.Component<Props, object> {
  handleRoomCountChange = (property: string, count: number, index: number) => {
    this.props.updateRoom({ index, count, property })
  }

  handleRoomToggle = (index: number) => {
    this.props.toggleRoom({ index })
  }

  saveState = () => {
    localStorage.setItem('rooms', JSON.stringify(this.props.rooms))
    alert('Saved!')
  }

  render () {
    const rooms = this.props.rooms.map((room, idx) => (
      <div className={'col-3'} key={idx}>
        <RoomCard
          dataIndex={idx}
          room={room}
          onCountChange={this.handleRoomCountChange}
          onRoomToggle={this.handleRoomToggle}
        />
      </div>
    ))

    return (
      <div>
        <p className={'lead text-center mt-4'}>Assessment 2: Room Options</p>
        <p className={'text-center'}><Link href={'/'}>Assessment 1</Link></p>
        <div className={'container'}>
          <div className={'row'}>
            {rooms}
          </div>
          <div className={'row text-right mt-3'}>
            <div className={'col'}>
              <button className={'btn btn-primary'} onClick={this.saveState}>Save State</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  toggleRoom: (payload: ToggleRoomPayload) => dispatch(toggleRoom(payload)),
  updateRoom: (payload: UpdateRoomPayload) => dispatch(updateRoom(payload))
})

const mapStateToProps = (state: AppState) => ({
  rooms: state.rooms.data
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer)
