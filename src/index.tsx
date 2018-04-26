import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { Fragment } from 'redux-little-router'

import Markup from './markup/component'
import Rooms from './rooms/container'

import Store from './store'
import registerServiceWorker from './registerServiceWorker'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Provider store={Store}>
    <div className={'main-container'}>
      <Fragment forRoute={'/'} withConditions={location => location.pathname === '/'}>
        <Markup/>
      </Fragment>
      <Fragment forRoute={'/rooms'}>
        <Rooms/>
      </Fragment>
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
