import * as React from 'react'
import { Link } from 'redux-little-router'

import Background from './background/component'
import Details from './details/component'
import Header from './header/component'
import Nav from './nav/component'

export default () => (
  <div>
    <p className={'lead text-center mt-4'}>Assessment 1: Phone Visual</p>
    <p className={'text-center'}><Link href={'/rooms'}>Assessment 2</Link></p>
    <Background>
      <Header/>
      <Details/>
      <Nav/>
    </Background>
  </div>
)
