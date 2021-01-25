import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { BodyWrapper, ContentWrapper, ContentBody, Block } from "../index";

import {
  Header,
  Sidebar,
  ContentHeading,
  SubscriptionCard,
  SupportCard,
} from "../../components";
import HeadWrapper from "../Wrapper/HeadWrapper";
import { Link } from "react-router-dom";

class MySubscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: props.user.bills.reverse(),
    };
  }
  render() {
    const { bills } = this.state;
    const { user } = this.props;
    return (
      <BodyWrapper>
        <Header />
        <ContentWrapper>
          <Sidebar />
          <ContentBody>
            <HeadWrapper>
              <ContentHeading
                title={"My Subscription"}
                subtitle={"Manage Subscription"}
                desc={
                  "Here is list of package/product that you have subscribed.)"
                }
              />
              <div class="nk-block-head-content">
                <Link to="/pricing">
                  <ul class="nk-block-tools gx-3">
                    <li class="order-md-last">
                      <a
                        href=""
                        class="btn btn-white btn-dim btn-outline-primary"
                      >
                        <span>View Pricing</span>
                      </a>
                    </li>
                  </ul>
                </Link>
              </div>
            </HeadWrapper>
            {bills.map((bill) => (
              <Block>
                <SubscriptionCard
                  title={bill.billFor}
                  status={bill.status}
                  id={bill.id}
                  date={bill.issueDate.replaceAll("-", "/")}
                  recuring={user.membershipAutoRenew ? "Yes" : "No"}
                  price={bill.total}
                  access={"Unlimited"}
                  dateBill={bill.dueDate.replaceAll("-", "/")}
                />
              </Block>
            ))}

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
});

const mapDispatchToProps = (dispatch) => ({});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MySubscription)
);
