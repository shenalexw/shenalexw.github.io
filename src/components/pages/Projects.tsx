import React, { Component } from 'react'
import '../../css/Projects.css'

type Props = {}

type State = {}

export default class Projects extends Component<Props, State> {
    state = {}

    render() {
        return (
            <>
                <div className='filler-block' id='projects' />
                <div className='projects' >
                    <div className="header">
                        <h2>Projects</h2>
                    </div>
                </div>
            </>
        )
    }
}