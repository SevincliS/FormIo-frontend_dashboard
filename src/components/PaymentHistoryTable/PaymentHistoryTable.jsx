import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class PaymentHistoryTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userPayment: props.user.bills,
    };
  }

  render() {
    const { userPayment } = this.state;
    const PaymentRow =
      userPayment &&
      userPayment.map((Payment) => {
        return (
          <tr class="tb-tnx-item">
            <td class="tb-tnx-id">
              <a href="#">
                <span>{Payment.id}</span>
              </a>
            </td>
            <td class="tb-tnx-info">
              <div class="tb-tnx-desc">
                <span class="title">{Payment.billFor}</span>
              </div>
              <div class="tb-tnx-date">
                <span class="date">
                  {Payment.issueDate.replaceAll("-", "/")}
                </span>
                <span class="date">{Payment.dueDate.replaceAll("-", "/")}</span>
              </div>
            </td>
            <td class="tb-tnx-amount">
              <div class="tb-tnx-total">
                <span class="amount">{Payment.total}</span>
              </div>
              <div class="tb-tnx-status">
                <span class={`badge badge-dot badge-${Payment.icon}`}>
                  {Payment.status}
                </span>
              </div>
            </td>
          </tr>
        );
      });
    return (
      <table class="table table-tranx">
        <thead>
          <tr class="tb-tnx-head">
            <th class="tb-tnx-id">
              <span class="">#</span>
            </th>
            <th class="tb-tnx-info">
              <span class="tb-tnx-desc d-none d-sm-inline-block">
                <span>Bill For</span>
              </span>
              <span class="tb-tnx-date d-md-inline-block d-none">
                <span class="d-md-none">Date</span>
                <span class="d-none d-md-block">
                  <span>Issue Date</span>
                  <span>Due Date</span>
                </span>
              </span>
            </th>
            <th class="tb-tnx-amount">
              <span class="tb-tnx-total">Total</span>
              <span class="tb-tnx-status d-none d-md-inline-block">Status</span>
            </th>
          </tr>
        </thead>
        <tbody>{PaymentRow}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaymentHistoryTable)
);
