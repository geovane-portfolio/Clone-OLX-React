import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

const Page = (props) => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  };
}

const mapDispatchProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchProps)(Page);
