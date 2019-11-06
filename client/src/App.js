import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {NotificationContainer} from 'react-notifications';
import PrivateRoute from './util/privateRoute';


import Login from './components/login';
import Logout from './components/logout';
import Dashboard from './components/dashboard';
import CandidateIndex from './components/candidateIndex';
import AddUpdateCandidates from './components/addUpdateCandidate';
import CandidateDetails from './components/candidateDetails';
import Pagination from './components/Pagination';
import Chart from './components/chart'
import Form from './components/form'

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = '/' component = {Login}></Route>
          <PrivateRoute exact path = '/dashboard' component = {Dashboard}></PrivateRoute>
          <PrivateRoute exact path = '/candidates' component = {CandidateIndex}></PrivateRoute>
          <PrivateRoute exact path = '/addcandidates' component = {AddUpdateCandidates}></PrivateRoute>
          <PrivateRoute exact path = '/updatecandidate' component = {AddUpdateCandidates}></PrivateRoute>
          <PrivateRoute exact path = '/details' component = {CandidateDetails}></PrivateRoute>
          <PrivateRoute exact path = '/logout' component = {Logout}></PrivateRoute>
          <Route exact path = '/pagination' component = {Pagination}></Route>
          <Route exact path = '/chart' component = {Chart}></Route>
          <Route exact path = '/form' component = {Form} ></Route>
        </Switch>
        <NotificationContainer></NotificationContainer>
      </Router>
    )
  }
}

export default App
