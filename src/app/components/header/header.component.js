import React from 'react';
import { NavLink } from 'react-router-dom'


export class Header extends React.PureComponent {
    render() {
        return (
            <header>
                <nav className="navbar" aria-label="main navigation">
                    <div className="navbar-brand">
                        <NavLink to="/" className="navbar-item" activeClassName="nav-active" exact>Home</NavLink>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <NavLink to="/about-us" className="navbar-item" activeClassName="nav-active" exact>About</NavLink>
                        </div>

                        <div className="navbar-end">
                        </div>
                    </div>

                </nav>
            </header>
        );
    }
}
