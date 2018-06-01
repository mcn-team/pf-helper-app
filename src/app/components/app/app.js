import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from '../pages/home/index';
import About from '../pages/about/index';
import { Header } from '../header/header.component';

import './app.css';
import { rootContainerStyle } from './app.styles';

export const App = () => (
    <div>
        <Header />
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
