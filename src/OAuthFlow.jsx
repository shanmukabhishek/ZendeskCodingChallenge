import React from 'react';
import {
    Redirect
  } from "react-router-dom";
export default class OAuth extends React.Component{
    constructor(props){
        super(props);
        this.state={
            redirectToTickets:false
        }
    }
    componentDidMount(){
        const isAuthorized = window.localStorage.getItem('authToken');
        // console.log(window.localStorage.getItem("aaa"));
        // console.log(window.location)
        if (isAuthorized!=='undefined' && isAuthorized) {
            this.setState({redirectToTickets:true});
        }
        else {
            var endpoint = 'https://zccshanmukabhishek.zendesk.com/oauth/authorizations/new';
            var url_params = '?' +
            'response_type=token' + '&' +
            'redirect_uri=http://localhost:3000' + '&' +
            'client_id=zendesk_ticket_viewer' + '&' +
            'scope=' + encodeURIComponent('read write');
            window.location = endpoint + url_params;
            if(window.location.toString().includes('access_token')){
                const token=window.location.toString().split('access_token=')[1].split('&scope')[0];
                window.localStorage.setItem('authToken',token);
            }
        }
    }

    render(){
        return <React.Fragment>
            {this.state.redirectToTickets && <Redirect to='/tickets'></Redirect>}
        </React.Fragment>
    }

}