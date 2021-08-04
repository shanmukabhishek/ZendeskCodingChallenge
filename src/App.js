import logo from './logo.svg';
import './App.css';
import base64 from "base-64";
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import OAuthFlow from './OAuthFlow';
import ShowTickets from './ShowTickets';






export default class App extends React.Component {

  

  render() {
    return <Router>
      <Switch>
        
        <Route exact path="/tickets" component={ShowTickets}/>
        {/* <Route exact path="/" component={OAuthFlow}/> */}
        <Route exact path="/" component={OAuthFlow}/>
        <Route path="*">
          <div>
            No Page with this Route
          </div>
        </Route>
      </Switch>
    </Router>
  }

 
}