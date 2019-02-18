import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home/Home';
import Services from './Services/Services'

export default () => (
    <Router>
        <Switch>
            <Route path='/' exact function={ Home } />
            <Route path='/services' exact component={ Services } />
        </Switch>
    </Router>
)