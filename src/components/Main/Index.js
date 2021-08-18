import React from 'react';
import Series from '../../containers/Series/Index'
import { Switch, Route } from 'react-router-dom';
import SingleSeries from '../../containers/SingleSeries/Index'

const Main = props => (
    <Switch>
        <Route exact path="/" component={Series}/>
        <Route path="/series/:id" component={SingleSeries}/>
    </Switch>
);

export default Main;