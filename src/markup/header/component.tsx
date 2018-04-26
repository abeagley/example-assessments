import * as React from 'react'

import logo from '../../assets/logo-small.png'
import './component.css'

export default (props: any) => (
  <div className={'row nav--top align-items-center'}>
    <div className={'col'}>
      <button className={'btn btn-default'}><span>&lsaquo;</span> Back</button>
    </div>
    <div className={'col-6 text-center'}>
      Hotel Details
    </div>
    <div className={'col text-right'}>
      <img src={logo} />
    </div>
  </div>
)
