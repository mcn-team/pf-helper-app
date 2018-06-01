import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import { Home } from '../pages/home/index'
import About from '../pages/about/index'

import './app.css';
import { rootContainerStyle } from './app.styles';

// TODO: Transform header to navbar component with redux state
export const App = () => (
    <div>
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

        <main className="columns">
            <div className="column is-8 is-offset-2">
                <div style={ rootContainerStyle }>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/about-us" component={ About } />
                </div>
            </div>
        </main>
    </div>
);
