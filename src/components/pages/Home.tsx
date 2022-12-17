import React, { Component } from 'react'
import '../../css/Home.css'
import homeData from '../../data/home.json'

type Props = {}

type State = {}

export default class Home extends Component<Props, State> {
    render() {
        return (
            <>
                <div className='home'>
                    <div className='home-content'>
                        <div className='home-welcome'>{homeData["welcome"]}</div>
                        <div className='home-full-name'>{homeData["name"]}</div>
                        <div className='home-description'>{homeData["description"]}</div>
                        <div className='home-button-row'>
                            <button onClick={() => window.open("https://www.linkedin.com/in/shenalexw/")}>LinkedIn</button>
                            <button onClick={() => window.open("https://github.com/shenalexw")}>github</button>
                            <button onClick={() => window.open("https://drive.google.com/file/d/1hYl_6yNotL1W-4MPfkC7wW7k0r7IOUVY/view?usp=sharing")}>Resumé</button>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}