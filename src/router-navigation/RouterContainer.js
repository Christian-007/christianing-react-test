import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { putPageLocation } from '../modules/actions'
import Home from '../components/Home/Home';
import FilmPath from './FilmPath';
import NotFoundPage from '../components/NotFoundPage';

class RouterContainer extends Component {
  componentWillMount() {
    const { history } = this.props;
    this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
    this.handleLocationChange(history.location);
  }

  componentWillUnmount() {
    if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
  }

  handleLocationChange = (location) => {
    // Send location to redux store
    this.props.putPageLocation(location.pathname);
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/films' component={FilmPath} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

const mapDispatchToProps = ({
  putPageLocation: putPageLocation
});

export default withRouter(connect(null, mapDispatchToProps)(RouterContainer));