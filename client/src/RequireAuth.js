import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from  './store/actions/userActions';
import jwt from 'jsonwebtoken';

export default function (ComposedComponent) {

  class Authentication extends Component {
    
    render () {
      let local = localStorage.getItem('lms-token');
      if (local) {
        let decode = jwt.decode(local);
        if (decode.status && this.props.location.pathname === '/verify/identity') {
          return decode.role === 'user' ? <Redirect to="/dashboard" /> : decode.role === 'faculty' ? <Redirect to="/home" /> : null; 
        } else {
          return <ComposedComponent {...this.props} />;
        }
      }
      else {
        return <Redirect to="/login" />
      };
    }
  }
  
  const mapStateToProps = state => {
    return {
      user: state.userDetails.user
    }
  }

  return connect(mapStateToProps, actions)(Authentication);
}
