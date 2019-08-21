import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationList from './LocationsList';


const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/characters' component={CharacterList} />
            <Route path='/locations' component={LocationList} />
        </Switch>
    )
}

export default AppRouter;