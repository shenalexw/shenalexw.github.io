import React, { Component } from 'react'
import '../../css/Work.css'
import WorkTile from '../worktile/WorkTile'
import workData from '../../data/work.json'

type Props = {}

type State = {}

export default class Work extends Component<Props, State> {
    state = {}

    render() {
        return (
            <>
                <div className='filler-block' id='work' />
                <div className='work' >
                    <div className="header">
                        work
                    </div>
                    <div className='work-content'>
                        <div className='work-row'>
                        {workData.map((work) => <WorkTile key={work.logo} logo={work.logo} position={work.position} bullets={work.bullets} />)}
                        </div>
                    </div>
                </div></>

        )
    }
}