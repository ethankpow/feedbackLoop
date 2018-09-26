import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'
import {bindActionCreators} from 'redux'


class Header extends Component {
  constructor(props){
    super(props)

    this.props.fetchUser()
  }
  // renderUser(){
  //   if()
  // }
  
  render() {
    console.log(this.props.auth)
    let actionButton = null;

    if(this.props.auth) {
      actionButton = (<a href='/api/logout'>logout</a>)
    } else {
      actionButton = (<a href='/auth/google'>Login With Google</a>)
    }

    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            Feedbackloop
          </a>
          <ul className="right">
            <li>
              {actionButton}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = ({auth}) => {
  return {auth};
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)