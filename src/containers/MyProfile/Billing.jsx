import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { backendUrl } from "../../config";
import { setUserAction } from "../../redux/actions/userActions";
const DateDiff = {
  inDays: function (d1, d2) {
    let t2 = d2.getTime();
    let t1 = d1.getTime();

    return parseInt((t2 - t1) / (24 * 3600 * 1000));
  },

  inWeeks: function (d1, d2) {
    let t2 = d2.getTime();
    let t1 = d1.getTime();

    return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
  },

  inMonths: function (d1, d2) {
    let d1Y = d1.getFullYear();
    let d2Y = d2.getFullYear();
    let d1M = d1.getMonth();
    let d2M = d2.getMonth();

    return d2M + 12 * d2Y - (d1M + 12 * d1Y);
  },

  inYears: function (d1, d2) {
    return d2.getFullYear() - d1.getFullYear();
  },
};
class Billing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMembership: {},
      membershipAutoRenew: props.user.membershipAutoRenew || false,
      endDateInMonths: 0,
      endDateInDays: 0,
      membershipEndDate: "",
      latestBill: props.user.bills[props.user.bills.length - 1],
    };
  }

  componentDidMount() {
    const { user } = this.props;
    const membershipId = user.membershipId;
    axios
      .get(`${backendUrl}/memberships/get`, { ids: membershipId })
      .then((res) => {
        this.setState({ activeMembership: res.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
    this.getDateDiff();
    this.reorderDateString(user.membershipEndDate);
  }

  getDateDiff = () => {
    const { user } = this.props;
    let d1 = new Date(user.membershipEndDate);
    let d2 = new Date();
    let endDateInMonths = DateDiff.inMonths(d1, d2);
    let endDateInDays = DateDiff.inDays(d1, d2) - endDateInMonths * 30;
    this.setState({ endDateInMonths, endDateInDays });
  };
  reorderDateString(str) {
    let splitString = str.split("-");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("/");
    this.setState({ membershipEndDate: joinArray });
  }
  render() {
    const {
      activeMembership,
      membershipAutoRenew,
      endDateInDays,
      endDateInMonths,
      membershipEndDate,
      latestBill,
    } = this.state;
    const { user, setUser } = this.props;
    return (
      <>
        <div class="nk-block-head">
          <div class="nk-block-head-content">
            <h5 class="nk-block-title">Current Subscription</h5>
            <div class="nk-block-des">
              <p>
                Details about your current subscription and billing information.
              </p>
            </div>
          </div>
        </div>
        <div class="card card-bordered">
          <div class="card-inner-group">
            <div class="card-inner">
              <div class="between-center flex-wrap flex-md-nowrap g-3">
                <div class="nk-block-text">
                  <h6>
                    {activeMembership.name + "  "}
                    <span class="text-base">
                      {activeMembership.name !== "Free"
                        ? "$" +
                          activeMembership.price +
                          " / " +
                          activeMembership.type
                        : null}
                    </span>
                  </h6>
                  <p class="text-soft">
                    Unlimited access with priority support, 99.95% uptime,
                    powerfull features and more...
                  </p>
                </div>
                <div class="nk-block-actions flex-shrink-0">
                  <a href="#" class="btn btn-primary">
                    Change Plan
                  </a>
                </div>
              </div>
            </div>
            <div class="card-inner">
              <div class="between-center flex-wrap flex-md-nowrap g-3">
                <div class="nk-block-text">
                  <p>
                    Learn more about our <a href="#">subscription options</a>.
                  </p>
                </div>
                {activeMembership.name !== "Free" ? (
                  <div class="nk-block-actions">
                    <ul class="align-center gx-3">
                      <li>
                        <div class="custom-control custom-control-right custom-switch">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="auto-renewal"
                            defaultChecked={membershipAutoRenew}
                            onChange={(e) => {
                              let newUser = {
                                ...user,
                                membershipAutoRenew: e.target.checked,
                              };
                              axios
                                .post(`${backendUrl}/users/edit`, newUser)
                                .then((res) => {
                                  setUser(newUser);
                                });
                              this.setState({
                                membershipAutoRenew: e.target.checked,
                              });
                            }}
                          />
                          <label
                            class="custom-control-label"
                            for="auto-renewal"
                          >
                            Auto Renewal
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {activeMembership.name !== "Free" ? (
          <>
            <div class="nk-block-head">
              <div class="nk-block-head-content">
                <h5 class="nk-block-title">Billing Cycle</h5>
                <div class="nk-block-des">
                  {user.membershipEndDate && user.membershipAutoRenew ? (
                    <p>
                      `Your subscription renews on ${membershipEndDate}`{" "}
                      <span class="fs-13px text-soft">
                        ({endDateInMonths} months {endDateInDays} days
                        remaining).
                      </span>
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <div class="card card-bordered">
              <div class="card-inner-group">
                <div class="card-inner">
                  <div class="between-center flex-wrap flex-md-nowrap g-3">
                    <div class="nk-block-text">
                      <h6>{activeMembership.type} Subscription</h6>
                      <ul class="list-inline list-col2 text-soft">
                        {user.membershipAutoRenew ? (
                          <li>
                            Next payment:{" "}
                            <strong class="text-base">
                              {latestBill.total} USD
                            </strong>{" "}
                            on{" "}
                            <strong class="text-base">
                              {latestBill.dueDate.replaceAll("-", "/")}
                            </strong>
                          </li>
                        ) : (
                          <li>
                            Your membership ends on:{" "}
                            <strong class="text-base">
                              {latestBill.dueDate.replaceAll("-", "/")}
                            </strong>
                          </li>
                        )}
                        <li>
                          Last payment made:{" "}
                          {latestBill.issueDate.replaceAll("-", "/")}
                        </li>
                      </ul>
                    </div>
                    <div class="nk-block-actions">
                      <ul class="align-center gx-3">
                        <li class="order-md-last">
                          <a href="#" class="link link-primary">
                            Switch Billing Cycle
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUserAction(user)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Billing)
);
