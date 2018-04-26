import * as React from 'react'

import './component.css'

export default (props: any) => (
  <div className={'mobile-view container'}>
    {props.children}
  </div>
)
