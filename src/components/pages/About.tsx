import React, { Component } from 'react'
import '../../css/About.css'

type Props = {}

type State = {}

export default class About extends Component<Props, State> {
    state = {}

    render() {
        return (
            <>
                <div className='filler-block' id='about' />
                <div className='about' >
                    <div className="header">
                        about
                    </div>

                </div></>

        )
    }
}