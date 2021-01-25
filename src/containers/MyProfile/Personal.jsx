import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Personal extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <>
        <div class="nk-block-head">
          <div class="nk-block-head-content">
            <h5 class="nk-block-title">Personal Information</h5>
            <div class="nk-block-des">
              <p>
                Basic info, like your name and address, that you use on Nio
                Platform.
              </p>
            </div>
          </div>
        </div>

        <div class="card card-bordered">
          <div class="nk-data data-list">
            <div
              class="data-item"
              data-toggle="modal"
              data-target="#profile-edit"
            >
              <div class="data-col">
                <span class="data-label">Full Name</span>
                <span class="data-value">{user.name}</span>
              </div>
              <div class="data-col data-col-end">
                <span class="data-more">
                  <em class="icon ni ni-forward-ios"></em>
                </span>
              </div>
            </div>

            <div class="data-item">
              <div class="data-col">
                <span class="data-label">Email</span>
                <span class="data-value">{user.email}</span>
              </div>
              <div class="data-col data-col-end">
                <span class="data-more disable">
                  <em class="icon ni ni-lock-alt"></em>
                </span>
              </div>
            </div>

            <div
              class="data-item"
              data-toggle="modal"
              data-target="#profile-edit"
            >
              <div class="data-col">
                <span class="data-label">Phone Number</span>
                <span class="data-value text-soft">
                  {user.phoneNumber || "Not added yet"}
                </span>
              </div>
              <div class="data-col data-col-end">
                <span class="data-more">
                  <em class="icon ni ni-forward-ios"></em>
                </span>
              </div>
            </div>

            <div
              class="data-item"
              data-toggle="modal"
              data-target="#profile-edit"
            >
              <div class="data-col">
                <span class="data-label">Date of Birth</span>
                <span class="data-value">
                  {user.birthDate || "Not added yet"}
                </span>
              </div>
              <div class="data-col data-col-end">
                <span class="data-more">
                  <em class="icon ni ni-forward-ios"></em>
                </span>
              </div>
            </div>

            <div
              class="data-item"
              data-toggle="modal"
              data-target="#profile-edit"
            >
              <div class="data-col">
                <span class="data-label">Address</span>
                <span class="data-value">
                  {user.address || "Not added yet"}
                </span>
              </div>
              <div class="data-col data-col-end">
                <span class="data-more">
                  <em class="icon ni ni-forward-ios"></em>
                </span>
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

const mapDispatchToProps = (dispatch) => ({});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Personal)
);
