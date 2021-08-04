import React from 'react';

export default class ShowTickets extends React.Component {

    constructor(props) {
        super(props);
        this.showIndividualTicket = this.showIndividualTicket.bind(this);
        this.state = {
            tickets: [],
            curTicketDetails : {},
            showIndividualTicketInd: false,
            authToken: window.localStorage.getItem('authToken')
        };
    }

    // async componentDidMount

    componentDidMount() {
        const authToken = window.localStorage.getItem('authToken');
        // console.log(authToken);
        fetch("https://zccshanmukabhishek.zendesk.com/api/v2/tickets.json", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        }).then(
            response => {
                // console.log(response);
                const x = response.json();
                // console.log(x);
                return x;
            }
        )
            .then(data => {
                const z = data;
                this.setState({ tickets: z.tickets });
            }

            )
            .catch(err => console.log(err));
    }

    showIndividualTicket() {
        return <React.Fragment>
            <div><b>Ticket Id:</b> {this.state.curTicketDetails.id} </div>
            <div><b>Requester Id:</b>  {this.state.curTicketDetails.requester_id} </div>
            <div><b>Subject:</b> {this.state.curTicketDetails.subject} </div>
            <div><b>Description:</b> {this.state.curTicketDetails.description} </div>
        </React.Fragment>
    }

    handleTicketOnClick(curTicketDetails) {
        if(curTicketDetails.id === this.state.curTicketDetails.id) {
            this.setState({showIndividualTicketInd: false, curTicketDetails: {}});
        }
        else {
            this.setState({curTicketDetails, showIndividualTicketInd: true});
        }
    }

    renderTickets() {
        return <table >
            <tr>
                <th>Ticket Id</th>
                <th>Subject</th>
                <th>Ticket Priority</th>
                <th>Assignee</th>
            </tr>
            {
                this.state.tickets && this.state.tickets.map((curTicket, i) => {
                    return <tr onClick={() => this.handleTicketOnClick(curTicket)}>
                        <td>{curTicket.id}</td>
                        <td>{curTicket.subject}</td>
                        <td>{curTicket.priority}</td>
                        <td>{curTicket.assignee_id}</td>
                    </tr>
                })
            }

        </table>
    }

    render() {
        return this.state.authToken && <React.Fragment>
            
            <div class="split left">
                <div class="centered">
                <h1>Zendesk Ticket Viewer</h1>
                {this.renderTickets()}
                </div>
            </div>

            <div class="split right">
                <div class="centered">
                {this.state.showIndividualTicketInd && this.showIndividualTicket()}
                </div>
            </div>
                
        </React.Fragment>
    }

}