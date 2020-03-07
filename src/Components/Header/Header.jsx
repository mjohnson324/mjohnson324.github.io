import React from 'react';
import './header.scss';
import logo from './logo.png';

const NAVDATA = [
    { link: "Skills" },
    { link: "Projects" },
    { link: "Contact" },
];

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
        this.setState({ 'hidden': !this.state.hidden });
    }

    isHidden() {
        return this.state.hidden ? 'hidden' : 'nav-tabs-mobile';
    }

    render() {
        return(
            <header id="head">
                <img id="logo" alt="site logo" src={logo} />
                <h1>Michael W. Johnson</h1>
                <h2>Data Analyst</h2>
                <button
                    id="menu-button"
                    className="button"
                    onClick={this.toggleHidden}>Menu
                </button>
                <nav id="page-tabs">
                    {NAVDATA.map(({ link }) => {
                        return(
                            <NavTab
                                key={link}
                                toggle={this.toggleHidden}
                                link={link}
                                hidden={this.isHidden()} />
                        );
                    })}
                </nav>
            </header>
        );
    }
}

const NavTab = function({ link, hidden, toggle }) {
    return(
        <a
            onClick={toggle}
            href={`#${link.toLowerCase()}`}
            className={`nav-tabs ${hidden}`}>
        {link}
        </a>
    );
}

export default Header;
