import React from "react";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";

class Queue extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterTicketList: [],
    };
    this.addNewTicketToList = this.addNewTicketToList.bind(this);
  }

  render() {
    return (
      <div>
        <TicketList ticketList = {this.state.masterTicketList}/>
        <NewTicketControl onNewTicketCreation= {this.addNewTicketToList}/>
      </div>
    );
  }

  addNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }
}

export default Queue;
