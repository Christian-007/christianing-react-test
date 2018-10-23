import React from 'react';
import '../Style.css';
import { Button } from 'react-bootstrap';
import FilmDetailsLoader from '../../../common/ComponentLoaders/FilmDetailLoader';
import FontAwesome from 'react-fontawesome';

export const FilmDetails = (props) => {
  return (
    <div id="film-details" className="section-wrapper">
      <div className="container">
        <Button style={{marginBottom: 10}} onClick={props.onBackClick}>
          <FontAwesome
            name='arrow-left'
            style={{marginRight: 5}}
          />
        Back
        </Button>
        <FilmDetailsCard details={props.filmReducers.filmDetail} />        
        <GenericDetailsCard dataType={props.filmReducers.characters} dataName='Characters' />
        <GenericDetailsCard dataType={props.filmReducers.starships} dataName='Starships' />
        <GenericDetailsCard dataType={props.filmReducers.planets} dataName='Planets' />
      </div>
    </div>
  )
}

const GenericDetailsCard = ({dataType, dataName}) => {
  if (dataType.isDoneFetching) {
    const arrayData = dataType.data.map((details, index) => {
      return (
        <p key={index}>{details.name}</p>
      )
    });

    return (
      <div className="film-details-box">
        <p className="film-episode">{dataName}</p>
        <hr />
        {arrayData.map(element => {
          return element
        })}
      </div>
    )
  } else {
    return <Loader />;
  }  
}

const Loader = () => {
  return (
    <div>
      <div className="film-details-box">
        <FilmDetailsLoader />
      </div>
    </div>
  )
}

const FilmDetailsCard = ({details}) => {
  if (Object.keys(details).length === 0) {
    return <Loader />;
  }
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
