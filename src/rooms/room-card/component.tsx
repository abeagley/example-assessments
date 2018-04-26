import * as React from 'react'

import { Room } from '../reducer'

import './component.css'

export interface Props {
  dataIndex: number
  room: Room
  onCountChange (type: string, count: number, dataIndex: number): void
  onRoomToggle (dataIndex: number): void
}

export interface State {
  adults: number
  children: number
}

export class RoomCard extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      adults: props.room.adults,
      children: props.room.children
    }
  }

  handleCountChange = (evt: React.ChangeEvent<HTMLSelectElement>, stateProp: string) => {
    const val = evt.target.value

    this.setState({
      [stateProp]: val
    } as any)

    this.props.onCountChange(stateProp, parseInt(val, 10), this.props.dataIndex)
  }

  render () {
    const { room } = this.props

    return (
      <div className={'card'}>
        <div className={'card-body'}>
          <h5 className={'card-title'}>
            <input
              type="checkbox"
              checked={room.active}
              disabled={this.props.dataIndex === 0}
              onChange={evt => this.props.onRoomToggle(this.props.dataIndex)}
            /> Room {this.props.dataIndex + 1}
          </h5>
          <div className={'form-group'}>
            <label className={'d-block w-100'}>Adults (18+)</label>
            <select
              className={'form-control'}
              disabled={!room.active}
              name={'adults'}
              onChange={evt => this.handleCountChange(evt, 'adults')}
              value={room.adults}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </div>
          <div className={'form-group mb-0'}>
            <label className={'d-block w-100'}>Children (0-17)</label>
            <select
              className={'form-control'}
              disabled={!room.active}
              name={'children'}
              onChange={evt => this.handleCountChange(evt, 'children')}
              value={room.children}
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default RoomCard
