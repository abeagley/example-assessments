import * as React from 'react'

import './component.css'

export default (props: any) => (
  <ul className={'list-group main-nav'}>
    <a
      href={'#'}
      className={'list-group-item list-group-item-action d-flex w-100 align-items-center justify-content-between'}
    >
      Map <span>&rsaquo;</span>
    </a>
    <a
      href={'#'}
      className={'list-group-item list-group-item-action d-flex w-100 align-items-center justify-content-between'}
    >
      Photo gallery <span>&rsaquo;</span>
    </a>
    <a
      href={'#'}
      className={'list-group-item list-group-item-action d-flex w-100 align-items-center justify-content-between'}
    >
      Amenities <span>&rsaquo;</span>
    </a>
    <a
      href={'#'}
      className={'list-group-item list-group-item-action d-flex w-100 align-items-center justify-content-between'}
    >
      Dining <span>&rsaquo;</span>
    </a>
    <a
      href={'#'}
      className={'list-group-item list-group-item-action d-flex w-100 align-items-center justify-content-between'}
    >
      Attractions <span>&rsaquo;</span>
    </a>
  </ul>
)
