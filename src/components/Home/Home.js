import React, { Component } from 'react';
import './Style.css';
import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div id="home">
        <div className="bg-img">
          <div className="bottom-btn">
            <Link to='/films'>
              <Button className="view-btn">
                VIEW FILMS{' '}
                <FontAwesome
                  name='arrow-right'
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;