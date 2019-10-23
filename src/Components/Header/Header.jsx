import React from 'react';
import './header.scss';
import logo from './logo.png';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'hidden': true,
        };

        this.toggleHidden = this.toggleHidden.bind(this);
        this.isHidden = this.isHidden.bind(this);
    }

    toggleHidden() {
        const newDisplay = !this.state.hidden;
        this.setState({ 'hidden': newDisplay });
    }

    isHidden() {
        if (this.state.hidden) { return 'hidden'; }
    }

    render() {
        return(
            <header id="head" className="dark-primary-color">
                <img id="logo" alt="site logo" src={logo} />
                <h1>Michael W. Johnson</h1>
                <h2>Front-End Engineer</h2>
                <button className="button" onClick={this.toggleHidden}>Menu</button>
                <nav id="page-tabs">
                    <a
                        onClick={this.toggleHidden}
                        className={`nav-tabs ${this.isHidden()} light-primary-color`}
                        href="#skills">Skills
                    </a>
                    <a
                        onClick={this.toggleHidden}
                        className={`nav-tabs ${this.isHidden()} light-primary-color`}
                        href="#projects">Projects
                    </a>
                    <a
                        onClick={this.toggleHidden}
                        className={`nav-tabs ${this.isHidden()} light-primary-color`}
                        href="#contact">Contact
                    </a>
                </nav>
            </header>
        );
    }
}

export default Header;