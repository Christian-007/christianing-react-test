import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="section-wrapper" style={{paddingTop: 120}}>
        <div className="container text-center">
          <FontAwesome
            name='frown-o'
            size='5x'
            style={{color: '#ccc'}}
          />
          <p style={{fontSize: 40, color: '#ccc'}}>404 Page Not Found</p>
        </div>
      </div>
    )
  }
}

export default NotFoundPage;