import React from "react";
import axios from "axios";
import { backendUrl } from "../../config";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setUserAction } from "../../redux/actions/userActions";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newBrowserNotification: props.user.newBrowserNotification || false,
    };
  }
  render() {
    const { newBrowserNotification } = this.state;
    const { user, setUser } = this.props;
    return (
      <>
        <div class="nk-block-head">
          <div class="nk-block-head-content">
            <h5 class="nk-block-title">Notification Settings</h5>
            <div class="nk-block-des">
              <p>You will get only notification what have enabled.</p>
            </div>
          </div>
        </div>
        <div class="nk-block-head nk-block-head-sm">
          <div class="nk-block-head-content">
            <h6>Security Alerts</h6>
            <div class="nk-block-des">
              <p>You will get only those email notification what you want.</p>
            </div>
          </div>
        </div>
        <div class="nk-block-content">
          <div class="gy-3">
            <div class="g-item">
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="new-browser"
                  defaultChecked={newBrowserNotification}
                  onChange={(e) => {
                    let newUser = {
                      ...user,
                      newBrowserNotification: e.target.checked,
                    };
                    axios
                      .post(`${backendUrl}/users/edit`, newUser)
                      .then((res) => {
                        setUser(newUser);
                      });
                    this.setState({
                      newBrowserNotification: e.target.checked,
                    });
                  }}
                />
                <label class="custom-control-label" for="new-browser">
                  Email me if new browser is used to sign in
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="nk-block-head nk-block-head-sm">
          <div class="nk-block-head-content">
            <h6 class="nk-block-title-sm">News</h6>
            <div class="nk-block-des">
              <p>You will get only those email notification what you want.</p>
            </div>
          </div>
        </div>
        <div class="nk-block-content">
          <div class="gy-3">
            <div class="g-item">
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  checked
                  id="latest-sale"
                />
                <label class="custom-control-label" for="latest-sale">
                  Notify me by email about sales and latest news
                </label>
              </div>
            </div>
            <div class="g-item">
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="feature-update"
                />
                <label class="custom-control-label" for="feature-update">
                  Email me about new features and updates
                </label>
              </div>
            </div>
            <div class="g-item">
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  checked
                  id="account-tips"
                />
                <label class="custom-control-label" for="account-tips">
                  Email me about tips on using account
                </label>
              </div>
            </div>
          </div>
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
  connect(mapStateToProps, mapDispatchToProps)(Notification)
);
