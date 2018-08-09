import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from '../../modules/actions';
import BoxFilm from './BoxFilm';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './Style.css';

class Films extends Component {
  componentDidMount() {
    this.props.fetchFilms();
  }
  
  renderBoxFilms = () => {
    let filmIndex;
    return this.props.filmReducers.films.map((film, index) => {
      filmIndex = film.url.substring(27, film.url.length-1);
      return (
        <Col xs={12} md={6} key={index}>
          <BoxFilm data={film} filmId={filmIndex}/>
        </Col>
      )
    })
  }

  render() {
    return (
      <div className="section-wrapper">
        <div className="container">
          <h1 className="header-text">FILMS</h1>
          <Grid>
            <Row className="show-grid">
              {this.renderBoxFilms()}    
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Films);
