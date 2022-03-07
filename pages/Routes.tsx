import * as React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import ProjectHome from './projects/projects';
import TimeLogger from './projects/timeLogger';
import Trello from './projects/trello';
import Personal from './about/personal';
import Professional from './about/professional';
import Home from '.';

export default function Routes() {
    return (
        <Switch>
            <Route path='/' component={Home} />
            <Route path='/projects/projects' component={ProjectHome} />
            <Route path='/projects/timeLogger' component={TimeLogger} />
            <Route path='/projects/trello' component={Trello} />
            <Route path='/about/personal' component={Personal} />
            <Route path='/about/professional' component={Professional} />
        </Switch>
    )
}