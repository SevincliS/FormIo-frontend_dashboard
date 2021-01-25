import React from "react";
import { NavLink } from "react-router-dom";
import { setUserAction } from "../../redux/actions/userActions";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { backendUrl } from "../../config";
class SubscriptionCard extends React.Component {
  render() {
    const { user, setUser } = this.props;
    return (
      <div class="card card-bordered sp-plan">
        <div class="row no-gutters">
          <div class="col-md-8">
            <div class="sp-plan-info card-inner">
              <div class="row gx-0 gy-3">
                <div class="col-xl-9 col-sm-8">
                  <div class="sp-plan-name">
                    <h6 style={{ color: "#798bff" }} class="title">
                      {this.props.title}{" "}
                      <span
                        class={`badge badge-pill ${
                          this.props.status === "Active"
                            ? "badge-success"
                            : "badge-light"
                        }`}
                      >
                        {this.props.status}
                      </span>
                    </h6>
                    <p>
                      Subscription ID:{" "}
                      <span class="text-base">{this.props.id}</span>
                    </p>
                  </div>
                </div>
                {this.props.status === "Active" ? (
                  <div class="col-xl-3 col-sm-4">
                    <div class="sp-plan-opt">
                      <div class="custom-control custom-switch">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="auto-plan-p1"
                          defaultChecked={this.props.recuring === "Yes"}
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
                          class="custom-control-label text-soft"
                          for="auto-plan-p1"
                        >
                          Auto Renew
                        </label>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div class="sp-plan-desc card-inner">
              <ul class="row gx-1">
                <li class="col-6 col-lg-3">
                  <p>
                    <span class="text-soft">Started On</span> {this.props.date}
                  </p>
                </li>
                {this.props.status === "Active" ? (
                  <li class="col-6 col-lg-3">
                    <p>
                      <span class="text-soft">Recuring</span>
                      {this.props.recuring}
                    </p>
                  </li>
                ) : null}
                <li class="col-6 col-lg-3">
                  <p>
                    <span class="text-soft">Price</span>
                    {this.props.price}
                  </p>
                </li>
                <li class="col-6 col-lg-3">
                  <p>
                    <span class="text-soft">Access</span> {this.props.access}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {this.props.status === "Active" ? (
            <div class="col-md-4">
              <div class="sp-plan-action card-inner">
                <div class="sp-plan-btn">
                  <a
                    href="#"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#subscription-change"
                  >
                    <span>Change Plan</span>
                  </a>
                </div>
                {user.membershipAutoRenew ? (
                  <div class="sp-plan-note text-md-center">
                    <p>
                      Next Billing on <span>{this.props.dateBill}</span>
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
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
  connect(mapStateToProps, mapDispatchToProps)(SubscriptionCard)
);
