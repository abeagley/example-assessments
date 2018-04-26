import * as React from 'react'
import { shallow } from 'enzyme'
import { RoomsContainer } from './container'

import { defaultState } from './reducer'

describe('RoomsContainer', () => {
  test('it should render', () => {
    const wrapper = shallow(<RoomsContainer rooms={[]} toggleRoom={jest.fn()} updateRoom={jest.fn()}/>)
    expect(wrapper).toBeTruthy()
  })

  test('it should render a rooms list', () => {
    const wrapper = shallow(<RoomsContainer rooms={defaultState.data} toggleRoom={jest.fn()} updateRoom={jest.fn()}/>)

    expect(wrapper.find('.col-3')).toHaveLength(4)
  })

  test('#handleRoomToggle should call mapped dispatcher', () => {
    const spy = jest.fn()

    const wrapper = shallow(<RoomsContainer rooms={defaultState.data} toggleRoom={spy} updateRoom={jest.fn()}/>)
    const instance: any = wrapper.instance()

    instance.handleRoomToggle(1)

    expect(spy).toHaveBeenCalledWith({ index: 1 })
  })

  test('#handleRoomChange should call mapped dispatcher', () => {
    const spy = jest.fn()

    const wrapper = shallow(<RoomsContainer rooms={defaultState.data} toggleRoom={jest.fn()} updateRoom={spy}/>)
    const instance: any = wrapper.instance()

    instance.handleRoomCountChange('adults', 1, 1)

    expect(spy).toHaveBeenCalledWith({ index: 1, property: 'adults', count: 1 })
  })
})
