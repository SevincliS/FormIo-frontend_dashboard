import React from "react";

import { BodyWrapper, ContentWrapper, ContentBody, Block } from "../index";

import {
  Header,
  Sidebar,
  ContentHeading,
  TicketMessage,
  Editor,
} from "../../components";
import HeadWrapper from "../Wrapper/HeadWrapper";
import { Link } from "react-router-dom";
import { setUserAction } from "../../redux/actions/userActions";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { backendUrl } from "../../config";
import { setTicketAction } from "../../redux/actions/ticketActions";

class TicketDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: props.ticket.messages || [],
    };
  }
  renderMessages = () => {
    const { messages } = this.props.ticket;
    return messages.map((message) => (
      <TicketMessage
        role={message.role}
        name={message.name}
        shortName={message.shortName}
        message={message.message}
        date={message.date}
      />
    ));
  };
  render() {
    const { ticket } = this.props;
    return (
      <BodyWrapper>
        <Header />
        <ContentWrapper>
          <Sidebar />
          <ContentBody>
            <HeadWrapper>
              <ContentHeading
                title={ticket.subject}
                subtitle={
                  <Link to="/tickets">
                    <a class="back-to" href="">
                      <em class="icon ni ni-arrow-left"></em>
                      <span>My Tickets</span>
                    </a>
                  </Link>
                }
              />
            </HeadWrapper>
            <Block>
              <div class="ticket-info">
                <ul class="ticket-meta">
                  <li class="ticket-id">
                    <span>Ticket ID:</span> <strong>{ticket.id}</strong>
                  </li>
                  <li class="ticket-date">
                    <span>Submitted:</span> <strong>{ticket.date}</strong>
                  </li>
                </ul>
                <div class="ticket-status">
                  <span
                    class={`badge ${
                      ticket.status === "Close"
                        ? "badge-light"
                        : "badge-success"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </div>
              </div>
            </Block>
            <Block>
              <div class="card card-bordered">
                <div class="card-inner">
                  <div class="ticket-msgs">
                    {this.renderMessages()}
                    <Editor />
                  </div>
                </div>
              </div>
            </Block>
          </ContentBody>
        </ContentWrapper>
      </BodyWrapper>
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
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TicketDetail)
);
