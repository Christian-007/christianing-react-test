import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FilmsContainer from '../pages/Films/FilmsContainer';
import FilmDetails from '../pages/FilmDetails/FilmDetails';

const FilmPath = () => (
  <Switch>
    <Route exact path='/films' component={FilmsContainer}/>
    <Route path='/films/:number' component={FilmDetails}/>
  </Switch>
)


export default FilmPath;