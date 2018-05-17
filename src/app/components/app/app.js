import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../pages/home/index'
import About from '../pages/about/index'

import './app.css';

export const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);
