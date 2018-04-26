import * as React from 'react'
import { shallow } from 'enzyme'
import { RoomCard } from './component'

import { defaultState } from '../reducer'

describe('RoomsContainer', () => {
  test('it should render', () => {
    const wrapper = shallow(<RoomCard dataIndex={0} room={defaultState.data[0]} onCountChange={jest.fn()} onRoomToggle={jest.fn()}/>)
    expect(wrapper).toBeTruthy()
  })

  test('it should render a room title', () => {
    const wrapper = shallow(<RoomCard dataIndex={0} room={defaultState.data[0]} onCountChange={jest.fn()} onRoomToggle={jest.fn()}/>)

    expect(wrapper.find('h5').text()).toEqual(' Room 1')
  })

  test('#handleCountChange should call parent method', () => {
    const spy = jest.fn()

    const wrapper = shallow(<RoomCard dataIndex={0} room={defaultState.data[0]} onCountChange={spy} onRoomToggle={jest.fn()}/>)
    const instance: any = wrapper.instance()

    instance.handleCountChange({ target: { value: 2 } }, 'adults')

    expect(spy).toHaveBeenCalledWith('adults', 2, 0)
  })
})
