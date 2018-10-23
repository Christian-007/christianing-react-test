import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FilmsContainer from '../pages/Films/FilmsContainer';
import FilmDetailsContainer from '../pages/FilmDetails/FilmDetailsContainer';

const FilmPath = () => (
  <Switch>
    <Route exact path='/films' component={FilmsContainer}/>
    <Route path='/films/:number' component={FilmDetailsContainer}/>
  </Switch>
)


export default FilmPath;