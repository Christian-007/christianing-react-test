import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './Style.css';
import { connect } from 'react-redux';

class NavigationBar extends Component {
  render() {
    const currentPage = this.props.navReducers.page;
    return (
      <div className="navbar-wrapper">
        <Navbar collapseOnSelect fixedTop className={currentPage === '/' ? 'mode-home' : ''}>
          <Navbar.Header>
            <Navbar.Brand className={currentPage === '/' ? 'mode-home' : ''}>
              <Link to="/">
                <FontAwesome
                  name='space-shuttle'
                  rotate={270}
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
                <span> STAR</span>
                <span className="sub-brand">WARS</span>
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  navReducers: state.navReducers
})

export default connect(mapStateToProps, {})(NavigationBar);