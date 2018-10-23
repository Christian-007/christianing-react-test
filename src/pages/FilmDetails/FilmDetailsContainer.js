import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilmDetail, unmountDetails } from '../../modules/actions';
import './Style.css';
import { FilmDetails } from './components/FilmDetails';
import { withRouter } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage';

class FilmDetailsContainer extends Component {
  componentDidMount() {
    const filmIndex = this.props.match.params.number;
    this.props.getFilmDetail(filmIndex);
  }

  componentWillUnmount() {
    this.props.unmountDetails();
  }

  clickBack = () => {
    this.props.history.push('/films');
  }

  render() {
    if (this.props.filmReducers.fetchError) {
      return <NotFoundPage />
    }
    return (
      <FilmDetails filmReducers={this.props.filmReducers} onBackClick={this.clickBack}/>
    )
  }
}

const mapStateToProps = (state) => ({
  filmReducers: state.filmReducers
});

const mapDispatchToProps = ({
  getFilmDetail: getFilmDetail,
  unmountDetails: unmountDetails
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmDetailsContainer));