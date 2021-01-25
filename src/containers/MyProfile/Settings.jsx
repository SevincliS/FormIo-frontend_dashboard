import React from "react";
import axios from "axios";
import { backendUrl } from "../../config";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setUserAction } from "../../redux/actions/userActions";
class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saveActivityLogs: props.user.saveActivityLogs || false,
      activities: props.user.activities.reverse() || [],
    };
  }

  render() {
    const { saveActivityLogs, activities } = this.state;
    const { user, setUser } = this.props;

    return (
      <>
        <div class="nk-block-head">
          <div class="nk-block-head-content">
            <h5 class="nk-block-title title">Security Settings</h5>
            <div class="nk-block-des">
              <p>These settings are helps you keep your account secure.</p>
            </div>
          </div>
        </div>
        <div class="card card-bordered">
          <div class="card-inner-group">
            <div class="card-inner">
              <div class="between-center flex-wrap flex-md-nowrap g-3">
                <div class="nk-block-text">
                  <h6>Save my Activity Logs</h6>
                  <p>
                    You can save your all activity logs including unusual
                    activity detected.
                  </p>
                </div>
                <div class="nk-block-actions">
                  <ul class="align-center gx-3">
                    <li class="order-md-last">
                      <div class="custom-control custom-switch mr-n2">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="activity-log"
                          defaultChecked={saveActivityLogs}
                          onChange={(e) => {
                            let newUser = {
                              ...user,
                              saveActivityLogs: e.target.checked,
                            };
                            axios
                              .post(`${backendUrl}/users/edit`, newUser)
                              .then((res) => {
                                setUser(newUser);
                              });
                            this.setState({
                              saveActivityLogs: e.target.checked,
                            });
                          }}
                        />
                        <label
                          class="custom-control-label"
                          for="activity-log"
                        ></label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-inner">
              <div class="between-center flex-wrap flex-md-nowrap g-3">
                <div class="nk-block-text">
                  <h6>Change Password</h6>
                  <p>Set a unique password to protect your account.</p>
                </div>
                <div class="nk-block-actions flex-shrink-sm-0">
                  <ul class="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                    <li class="order-md-last">
                      <a href="#" class="btn btn-primary">
                        Change Password
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nk-block-head nk-block-head-sm">
          <div class="nk-block-head-content">
            <div class="nk-block-title-group">
              <h6 class="nk-block-title title">Recent Activity</h6>
              <a href="#" class="link">
                See full log
              </a>
            </div>
            <div class="nk-block-des">
              <p>
                This information about the last login activity on your account.
              </p>
            </div>
          </div>
        </div>
        <div class="card card-bordered">
          <table class="table table-ulogs">
            <thead class="thead-light">
              <tr>
                <th class="tb-col-os">
                  <span class="overline-title">
                    Browser <span class="d-sm-none">/ IP</span>
                  </span>
                </th>
                <th class="tb-col-ip">
                  <span class="overline-title">IP</span>
                </th>
                <th class="tb-col-time">
                  <span class="overline-title">Time</span>
                </th>
                <th class="tb-col-action">
                  <span class="overline-title">&nbsp;</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, i) => {
                if (i < 3) {
                  return (
                    <tr>
                      <td class="tb-col-os">
                        {activity.browser} on {activity.os}
                      </td>
                      <td class="tb-col-ip">
                        <span class="sub-text">{activity.ip}</span>
                      </td>
                      <td class="tb-col-time">
                        <span class="sub-text">{activity.time}</span>
                      </td>
                      <td class="tb-col-action"></td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
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
  connect(mapStateToProps, mapDispatchToProps)(Settings)
);
