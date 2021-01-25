import React from "react";
import { Link } from "react-router-dom";
import { setUserAction } from "../../redux/actions/userActions";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { backendUrl } from "../../config";
import { setTicketAction } from "../../redux/actions/ticketActions";

class TicketTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: props.user.tickets || [],
    };
  }

  renderTicketRows = () => {
    const { tickets } = this.state;
    const { setTicket } = this.props;
    return tickets.map((ticket) => (
      <tr class={`tb-ticket-item ${ticket.isUnread ? `is-unread` : null}`}>
        <td class="tb-ticket-id">
          <Link
            to="/ticket-detail"
            onClick={() => {
              setTicket(ticket);
            }}
          >
            <a href="">{ticket.id}</a>
          </Link>
        </td>
        <td class="tb-ticket-desc">
          <Link
            to="/ticket-detail"
            onClick={() => {
              setTicket(ticket);
            }}
          >
            <a href="">
              <span class="title">{ticket.subject}</span>
            </a>
          </Link>
        </td>
        <td class="tb-ticket-date tb-col-md">
          <span class="date">{ticket.date}</span>
        </td>
        <td class="tb-ticket-seen tb-col-md">
          <span class="date-last">
            <em
              class={`icon-avatar ${
                ticket.lastSeenTrack === "Support Team"
                  ? "bg-danger-dim"
                  : ticket.lastSeenTrack === "Technical Team"
                  ? "bg-warning-dim"
                  : null
              } icon ni ni-user-fill nk-tooltip`}
              title={ticket.lastSeenTrack}
            ></em>{" "}
            {ticket.lastSeen}
          </span>
        </td>
        <td class="tb-ticket-status">
          <span
            class={`badge ${
              ticket.status === "Open" ? `badge-success` : `badge-light`
            }`}
          >
            {ticket.status}
          </span>
        </td>
        <Link
          to="/ticket-detail"
          onClick={() => {
            setTicket(ticket);
          }}
        >
          <td class="tb-ticket-action">
            <a href="" class="btn btn-icon btn-trigger">
              <em class="icon ni ni-chevron-right"></em>
            </a>
          </td>
        </Link>
      </tr>
    ));
  };
  render() {
    return (
      <table class="table table-tickets">
        <thead class="tb-ticket-head">
          <tr class="tb-ticket-title">
            <th class="tb-ticket-id">
              <span>Ticket</span>
            </th>
            <th class="tb-ticket-desc">
              <span>Subject</span>
            </th>
            <th class="tb-ticket-date tb-col-md">
              <span>Submited</span>
            </th>
            <th class="tb-ticket-seen tb-col-md">
              <span>Last Seen</span>
            </th>
            <th class="tb-ticket-status">
              <span>Status</span>
            </th>
            <th class="tb-ticket-action"> &nbsp; </th>
          </tr>
        </thead>
        <tbody class="tb-ticket-body">{this.renderTicketRows()}</tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUserAction(user)),
  setTicket: (ticket) => dispatch(setTicketAction(ticket)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TicketTable)
);
