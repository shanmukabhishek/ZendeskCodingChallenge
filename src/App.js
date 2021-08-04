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



// function startAuthFlow() {
//   const isAuthorized = localStorage.getItem('zauth');
//   if (isAuthorized) {
//     window.location = window.location + "/tickets";
//   }
//   else {
//     var endpoint = 'https://zccshanmukabhishek.zendesk.com/oauth/authorizations/new';
//     var url_params = '?' +
//       'response_type=token' + '&' +
//       'redirect_uri=http://localhost:3000' + '&' +
//       'client_id=zendesk_ticket_viewer' + '&' +
//       'scope=' + encodeURIComponent('read write');
//     window.location = endpoint + url_params;
//   }
// }

// function getTickets() {
//   const authToken = 'd7789d7f9147a98d3fc1d3b717d0fdffa92d00d2ddc7aafc6747d3d629cf76a5';
//   fetch("https://zccshanmukabhishek.zendesk.com/api/v2/tickets.json", {
//     method: "GET",
//     headers: {
//       "Authorization": `Bearer ${authToken}`
//     }
//   }).then(res => {
//     return res.json();
//   }).catch(error => console.error(error));
// }

// function processAuthUrl() {
//   var url = window.location.href;
//   if (url.indexOf('http://localhost:3000') !== -1) {
//     if (url.indexOf('access_token=') !== -1) {
//       var access_token = 10;//readUrlParam(url, 'access_token');
//       localStorage.setItem('zauth', access_token);
//       window.location.hash = "";
//       const tickets = getTickets();

//     }


//     if (url.indexOf('error=') !== -1) {
//       var error_desc = 20;//readUrlParam(url, 'error_description');
//       var msg = 'Authorization error: ' + error_desc;
//       //showError(msg);
//     }
//   }
// }


export default class App extends React.Component {

  // showTickets() {
  //   return localStorage.getItem('zauth') && <React.Fragment>
  //     Zendesk App
  // </React.Fragment>
  // }

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

  // You can think of these components as "pa

//   const isAuthorized = localStorage.getItem('zauth');
//   if(isAuthorized) {
//     return this.showTickets();
//   }
//     else {
//   startAuthFlow();
// }
//   }
}