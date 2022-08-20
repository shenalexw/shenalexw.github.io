import React, { Component } from 'react';
import '../../css/Contact.css';
import contactData from '../../data/contact.json';
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
                        Contact
                    </div>
                    <div className='center-flex'>
                        <div className='contact-content'>
                            <div className='contact-thanks'>{contactData["thanks"]}</div>
                            <div className='contact-message'>{contactData["message"]}</div>
                            <button>Say Hi ☕</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}