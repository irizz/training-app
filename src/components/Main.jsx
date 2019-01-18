import React from 'react';
// router
import { Switch, Route } from 'react-router-dom';
// components
import { Home } from './Home';
import { Tutorial } from './Tutorial';
import { TrainingIntro } from './TrainingIntro';
import { Training } from './Training';
import { Test } from './Test';

export const Main = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/learn' component={Tutorial} />
                <Route exact path='/train' component={TrainingIntro} />
                <Route path='/train/session' component={Training} />
                <Route path='/test' component={Test} />
            </Switch>
        </React.Fragment>
    )
}