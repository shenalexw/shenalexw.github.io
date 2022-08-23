import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link'
import '../../css/Navbar.css'
import logo from '../../images/logo.png'

type Props = {}

type State = {
    isNavToggled: boolean
}

export default class Navbar extends Component<Props, State> {
    constructor(Props: Props | Readonly<Props>) {
        super(Props);
        this.state = { isNavToggled: false };
        this.handleNavToggle = this.handleNavToggle.bind(this);
    }

    handleNavToggle(): void {
        this.setState(prevState => ({
            isNavToggled: !prevState.isNavToggled
        }));
        const burger = document.querySelector(".burger")!;
        burger.classList.toggle("toggle");
    }

    render() {
        return (
            <nav>
                <div className='logo'>
                    <HashLink smooth to="/#">
                        <img className='nav-logo' src={logo} />
                    </HashLink>
                </div>
                <div className={this.state.isNavToggled ? "nav-links-box" : "nav-links-hidden"}>
                    <div className='nav-links'>
                        <HashLink smooth to="/#work">
                            <div onClick={this.handleNavToggle}>Work</div>
                        </HashLink>

                        <HashLink smooth to="/#projects">
                            <div onClick={this.handleNavToggle}>projects</div>
                        </HashLink>

                        <HashLink smooth to="/#contact">
                            <div onClick={this.handleNavToggle}>contact</div>
                        </HashLink>
                    </div>
                </div>
                <div className="burger" onClick={this.handleNavToggle}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

            </nav>
        )
    }
}