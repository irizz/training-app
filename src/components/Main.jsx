import React from 'react';
// router
import { Switch, Route } from 'react-router-dom';
// components
import { Home } from './Home';
import { Training } from './Training';
import { Test } from './Test';

export const Main = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/training' component={Training} />
                <Route path='/test' component={Test} />
            </Switch>
        </React.Fragment>
    )
}