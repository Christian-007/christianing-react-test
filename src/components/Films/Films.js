import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilms, unmountData } from '../../modules/actions';
import BoxFilm from './BoxFilm';
import { Grid, Row, Col } from 'react-bootstrap';
import FilmLoader from '../ComponentLoaders/FilmLoader';
import './Style.css';

class Films extends Component {
  componentDidMount() {
    this.props.fetchFilms();
  }
  
  renderBoxFilms = () => {
    let filmIndex;
    return this.props.filmReducers.films.data.map((film, index) => {
      filmIndex = film.url.substring(27, film.url.length-1);
      return (
        <Col xs={12} md={4} key={index}>
          <BoxFilm data={film} filmId={filmIndex}/>
        </Col>
      )
    })
  }

  componentWillUnmount() {
    this.props.unmountData('films');
  }

  renderLoaders = () => {
    const presetContents = Array.from({length: 6});
    return (
      <div>
        {presetContents.map((_, index) => 
          <Col xs={12} md={4} key={index}>
            <FilmLoader />
          </Col>
        )}
      </div>
    )
  }

  render() {
    const filmReducers = this.props.filmReducers.films;
    return (
      <div className="section-wrapper">
        <div className="container">
          <h1 className="header-text">FILMS</h1>
          <Grid>
            <Row className="show-grid">
              {filmReducers.isDoneFetching ? this.renderBoxFilms() : this.renderLoaders()}
            </Row>
          </Grid>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Films);