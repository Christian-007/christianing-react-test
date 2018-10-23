import React from 'react';
import FilmLoader from '../../../common/ComponentLoaders/FilmLoader';
import BoxFilm from './BoxFilm';
import { Grid, Row, Col } from 'react-bootstrap';

// Film Layout
export const Films = (props) => {
  return (
    <div className="section-wrapper">
      <div className="container">
        <h1 className="header-text">FILMS</h1>
        <Grid>
          <Row className="show-grid">
            {props.isDoneFetching ? <FilmCards filmData={props.filmData} /> : <Loaders />}
          </Row>
        </Grid>
      </div>
    </div>
  )
}

// Render Content Loaders
const Loaders = () => {
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

// Render Film Cards
const FilmCards = ({filmData}) => {
  let filmIndex;
  return filmData.map((film, index) => {
    filmIndex = film.url.substring(27, film.url.length-1);
    return (
      <Col xs={12} md={4} key={index}>
        <BoxFilm data={film} filmId={filmIndex}/>
      </Col>
    )
  })
}