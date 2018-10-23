import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilms, unmountData } from '../../modules/actions';
import { Films } from './components/Films';
import './Style.css';

class FilmsContainer extends Component {
  componentDidMount() {
    this.props.fetchFilms();
  }

  componentWillUnmount() {
    this.props.unmountData('films');
  }

  render() {
    const filmReducers = this.props.filmReducers.films;
    return (
      <Films 
        isDoneFetching={filmReducers.isDoneFetching} 
        filmData={filmReducers.data}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  filmReducers: state.filmReducers,
});

const mapDispatchToProps = ({
  fetchFilms: fetchFilms,
  unmountData: unmountData,
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);