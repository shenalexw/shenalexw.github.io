import React, { Component } from 'react'
import '../../css/Home.css'
import homeData from '../../data/home.json'

type Props = {}

type State = {}

export default class Home extends Component<Props, State> {
    render() {
        return (
            <div className='home'>
                <div className='home-content'>
                    <div className='home-welcome'>{homeData["welcome"]}</div>
                    <div className='home-full-name'>{homeData["name"]}</div>
                    <div className='home-tagline'>{homeData["tagline"]}</div>
                    <div className='home-description'>{homeData["description"]}</div>
                </div>
            </div>
        )
    }
}