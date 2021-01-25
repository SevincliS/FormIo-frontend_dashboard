import React from "react";

import { BodyWrapper, ContentWrapper, ContentBody, Block } from "../index";

import {
  Header,
  Sidebar,
  ContentHeading,
  SubscriptionCard,
  SupportCard,
  PaymentCard,
  PaymentHistoryTable,
} from "../../components";
import HeadWrapper from "../Wrapper/HeadWrapper";
import { Link } from "react-router-dom";
import { setUserAction } from "../../redux/actions/userActions";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { backendUrl } from "../../config";

class SubscriptionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBill:
        props.user.bills.filter((bill) => bill.status === "Active")[0] || {},
    };
  }

  render() {
    const { currentBill } = this.state;
    const { user } = this.props;
    return (
      <BodyWrapper>
        <Header />
        <ContentWrapper>
          <Sidebar />
          <ContentBody>
            <HeadWrapper>
              <ContentHeading
                title={"Enterprise Plan"}
                subtitle={
                  <Link to="/my-subscription">
                    <a
                      class="back-to"
                      href="html/subscription/subscriptions.html"
                    >
                      <em class="icon ni ni-arrow-left"></em>
                      <span>My Subscription</span>
                    </a>
                  </Link>
                }
                desc={
                  "Your subscription renews on Oct 28, 2020 (11 months 16 days remaining)"
                }
              />
              <div class="nk-block-head-content">
                <ul class="nk-block-tools justify-content-md-end g-4 flex-wrap">
                  <li class="order-md-last">
                    <a
                      href="#"
                      class="btn btn-auto btn-dim btn-danger"
                      data-toggle="modal"
                      data-target="#subscription-cancel"
                    >
                      <em class="icon ni ni-cross"></em>
                      <span>Cancel Subscription</span>
                    </a>
                  </li>
                  <li>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        checked=""
                        id="auto-renew"
                      />
                      <label
                        class="custom-control-label text-soft"
                        for="auto-renew"
                      >
                        Auto Renew
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </HeadWrapper>
            <Block>
              <SubscriptionCard
                title={currentBill.billFor}
                status={currentBill.status}
                id={currentBill.id}
                date={currentBill.issueDate.replaceAll("-", "/")}
                recuring={user.membershipAutoRenew ? "Yes" : "No"}
                price={currentBill.total}
                access={"Unlimited"}
                dateBill={currentBill.dueDate.replaceAll("-", "/")}
              />
            </Block>
            <Block>
              <div class="row">
                <div class="col-xl-12">
                  <PaymentCard />
                </div>
              </div>
            </Block>
            <Block>
              <div class="card card-bordered">
                <div class="card-inner card-inner-md">
                  <div class="card-title-group">
                    <h6 class="card-title">Payment History</h6>
                    <div class="card-action">
                      <a href="payments.html" class="link link-sm">
                        Download Statement
                      </a>
                    </div>
                  </div>
                </div>
                <PaymentHistoryTable />
              </div>
            </Block>
            <Block>
              <SupportCard />
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
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SubscriptionDetail)
);
