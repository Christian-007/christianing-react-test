import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilmDetail, getBatchDetails, unmountDetails } from '../../modules/actions';
import { Button } from 'react-bootstrap';
import './Style.css';
import FilmDetailsLoader from '../../common/ComponentLoaders/FilmDetailLoader';
import FontAwesome from 'react-fontawesome';
import { withRouter } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage';

class FilmDetails extends Component {
  componentDidMount() {
    const filmIndex = this.props.match.params.number;
    this.props.getFilmDetail(filmIndex);
  }

  componentWillUnmount() {
    this.props.unmountDetails();
  }

  renderFilmDetail = () => {
    const details = this.props.filmReducers.filmDetail;
    return (
      <div className="film-details-box">
        <p className="film-episode">
          Episode {details.episode_id}: 
          <span className="film-title">{details.title}</span>
        </p>
        <hr />
        <p>Release date: <span className="text-detail">{details.release_date}</span></p>
        <p>Director: <span className="text-detail">{details.director}</span></p>
        <p>Producer: <span className="text-detail">{details.producer}</span></p>
        <br/>
        <p>{details.opening_crawl}</p>
      </div>
    )
  }

  renderElement = (dataType) => {
    const arrayData = this.props.filmReducers[dataType.toLowerCase()].data.map((character, index) => {
      return (
        <p key={index}>{character.name}</p>
      )
    });
    return (
      <div className="film-details-box">
        <p className="film-episode">{dataType}</p>
        <hr />
        {arrayData.map(element => {
          return element
        })}
      </div>
    )
  }

  renderLoader = () => {
    return (
      <div>
        <div className="film-details-box">
          <FilmDetailsLoader />
        </div>
      </div>
    )
  }

  clickBack = () => {
    this.props.history.push('/films');
  }

  render() {
    if (this.props.filmReducers.fetchError) {
      return <NotFoundPage />
    }
    return (
      <div id="film-details" className="section-wrapper">
        <div className="container">
          <Button style={{marginBottom: 10}} onClick={this.clickBack}>
            <FontAwesome
              name='arrow-left'
              style={{marginRight: 5}}
            />
          Back
          </Button>
          {Object.keys(this.props.filmReducers.filmDetail).length === 0 ? this.renderLoader() : this.renderFilmDetail()}
          <br />
          {this.props.filmReducers.characters.isDoneFetching ? this.renderElement('Characters') : this.renderLoader() }
          <br />
          {this.props.filmReducers.planets.isDoneFetching ? this.renderElement('Planets') : this.renderLoader() }
          <br />
          {this.props.filmReducers.starships.isDoneFetching ? this.renderElement('Starships') : this.renderLoader() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filmReducers: state.filmReducers
});

const mapDispatchToProps = ({
  getFilmDetail: getFilmDetail,
  getBatchDetails: getBatchDetails,
  unmountDetails: unmountDetails
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmDetails));