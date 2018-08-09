import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilmDetail, getBatchDetails } from '../../modules/actions';
import './Style.css'

class FilmDetails extends Component {
  componentDidMount() {
    const filmIndex = this.props.match.params.number;
    console.log('params: ' + filmIndex);
    this.props.getFilmDetail(filmIndex);
  }

  renderFilmDetail = () => {
    const details = this.props.filmReducers.filmDetail;
    // const characters = this.props.filmReducers.filmDetail.characters;
    // this.props.getBatchDetails(characters);
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
        <br/>
        <p>Characters:</p>
        <p></p>
      </div>
    )
  }

  render() {
    return (
      <div id="film-details" className="section-wrapper">
        <div className="container">
          {this.renderFilmDetail()}
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
  getBatchDetails: getBatchDetails
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);