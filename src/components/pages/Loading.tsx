import React, { Component } from 'react'
import '../../css/Loading.css'
import logo from '../../images/logo.png'
import trail from '../../images/trail.png'

type Props = {}

type State = {}

export default class Loading extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='loading-page'>
        <div className='loading-moving-block'>
            <img alt='trail 1' src={trail} className='loading-trail-1'/>
            <img alt='trail 2' src={trail} className='loading-trail-2'/>
            <img alt='logo' src={logo} className='loading-image'/>
        </div>
      </div>
    )
  }
}