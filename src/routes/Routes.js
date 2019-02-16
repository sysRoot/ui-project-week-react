import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home/Home';

export default () => (
    <Router>
        <Route path='/' exact component={ Home } />
    </Router>
)