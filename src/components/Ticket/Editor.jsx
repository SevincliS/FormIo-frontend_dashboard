import React from "react";
import { setUserAction } from "../../redux/actions/userActions";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { backendUrl } from "../../config";
import { setTicketAction } from "../../redux/actions/ticketActions";
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessageText: "",
    };
  }

  sendNewMessage = () => {
    const { newMessageText } = this.state;
    const { user, ticket, setTicket, setUser } = this.props;
    const date = new Date();
    let time = `${(date.getDate() < 10 ? "0" : "") + date.getDate()}/${
      (date.getMonth() < 9 ? "0" : "") + (date.getMonth() + 1)
    }/${date.getFullYear()} ${
      (date.getHours() < 10 ? "0" : "") + date.getHours()
    }:${(date.getMinutes() < 10 ? "0" : "") + date.getMinutes()}`;

    let newMessage = {
      role: "Customer",
      name: user.name,
      shortName: user.name[0],
      message: newMessageText,
      date: time,
    };
    let newTicket = {
      ...ticket,
      messages: [...ticket.messages, newMessage],
    };
    const elementsIndex = user.tickets.findIndex(
      (element) => element.id === ticket.id
    );
    let newTickets = [...user.tickets];
    newTickets[elementsIndex] = {
      ...newTickets[elementsIndex],
      messages: [...newTickets[elementsIndex].messages, newMessage],
    };
    let newUser = { ...user, tickets: newTickets };
    setTicket(newTicket);
    setUser(newUser);
    this.updateDbUser(newUser);
    document.getElementById("message").value = "";
  };

  updateDbUser = (newUser) => {
    axios.post(`${backendUrl}/users/edit`, newUser).then((res) => {});
  };

  markTicketClose = () => {
    const { user, ticket, setTicket, setUser } = this.props;

    let newTicket = {
      ...ticket,
      status: "Close",
    };
    const elementsIndex = user.tickets.findIndex(
      (element) => element.id === ticket.id
    );
    let newTickets = [...user.tickets];
    newTickets[elementsIndex] = {
      ...newTickets[elementsIndex],
      status: "Close",
    };
    let newUser = { ...user, tickets: newTickets };
    setTicket(newTicket);
    setUser(newUser);
    this.updateDbUser(newUser);
  };
  markTicketOpen = () => {
    const { user, ticket, setTicket, setUser } = this.props;

    let newTicket = {
      ...ticket,
      status: "Open",
    };
    const elementsIndex = user.tickets.findIndex(
      (element) => element.id === ticket.id
    );
    let newTickets = [...user.tickets];
    newTickets[elementsIndex] = {
      ...newTickets[elementsIndex],
      status: "Open",
    };
    let newUser = { ...user, tickets: newTickets };
    setTicket(newTicket);
    setUser(newUser);
    this.updateDbUser(newUser);
  };

  render() {
    const { ticket } = this.props;
    return (
      <div class="ticket-msg-reply">
        {ticket.status !== "Close" ? <h5 class="title">Reply</h5> : null}
        <div class="form-reply">
          <div class="form-action">
            {ticket.status !== "Close" ? (
              <>
                <div class="form-group">
                  <div class="form-editor-custom">
                    <textarea
                      id="message"
                      class="form-control"
                      placeholder="Write a message..."
                      onChange={(e) => {
                        this.setState({ newMessageText: e.target.value });
                      }}
                    ></textarea>
                  </div>
                </div>
                <ul class="form-btn-group">
                  <li class="form-btn-primary">
                    <button
                      class="btn btn-primary"
                      onClick={() => {
                        this.sendNewMessage();
                      }}
                    >
                      Send
                    </button>
                  </li>
                  <li class="form-btn-secondary">
                    <button
                      class="btn btn-dim btn-outline-light"
                      onClick={() => {
                        this.markTicketClose();
                      }}
                    >
                      Mark as close
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <ul class="form-btn-group">
                <li class="form-btn-secondary">
                  <button
                    class="btn btn-dim btn-outline-light"
                    onClick={() => {
                      this.markTicketOpen();
                    }}
                  >
                    Mark as open
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  ticket: state.ticket,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUserAction(user)),
  setTicket: (ticket) => dispatch(setTicketAction(ticket)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Editor));
