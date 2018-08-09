import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Style.css';
import { Link } from 'react-router-dom';

class BoxFilm extends React.PureComponent {  
  render() {
    const { data, filmId } = this.props;
    return(
      <div className="box">
        <p className="film-episode">
          Episode {data.episode_id}: 
          <span className="film-title">{'  '+ data.title}</span>
        </p>
        <hr />
        <Link to={'/films/'+ filmId}>
          <button className="btn-view">
            View
            <FontAwesome
              name='arrow-right'
              style={{marginLeft: 5}}
            />
          </button>
        </Link>
      </div>
    )
  }
}

export default BoxFilm;