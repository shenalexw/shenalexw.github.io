import React, { Component } from 'react';
import '../../css/Contact.css';
type Props = {}

type State = {}

export default class Contact extends Component<Props, State> {
    state = {}

    render() {
        return (
            <>
                <div className='filler-block' id='contact' />
                <div className='contact'>
                    <div className="header">
                        <h2>Contact</h2>
                    </div>
                </div>
            </>
        )
    }
}