import * as React from 'react'

import hotel from '../../assets/hotel.jpg'
import './component.css'

export default (props: any) => (
  <div className={'row details no-gutters'}>
    <div className={'col-12'}>
      <div className={'image-box'}>
        <img src={hotel} />
      </div>
    </div>
    <div className={'col-12'}>
      <h5 className={'title'}>Hilton Chicago</h5>
      <p className={'address'}>
        720 South Michigan Avenue<br />
        Chicago, Illinois, 60605
      </p>
      <p className={'phone'}><a href="tel:13129224400">1-312-922-4400</a></p>
    </div>
  </div>
)
