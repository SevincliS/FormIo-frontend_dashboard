import React from "react";

import {
  BodyWrapper,
  ContentWrapper,
  ContentBody,
  Block,
  HeadWrapper,
} from "../index";

import { Header, Sidebar, ContentHeading } from "../../components";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { backendUrl } from "../../config";
import { setUserAction } from "../../redux/actions/userActions";

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      premiumEndPoint: "",
      membershipType: "",
    };
  }

  componentDidMount() {
    const { user } = this.props;
    let membershipId = user.membershipId;
    axios
      .get(`${backendUrl}/memberships/get`, { ids: membershipId })
      .then((res) => {
        this.setState({ membershipType: res.data[0].name });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createForms = () => {
    const { user } = this.props;
    const { name } = this.state;
    let userId = user._id;
    axios
      .post(`${backendUrl}/forms/create`, { userId, name })
      .then((res) => {
        this.addNewFormToUser(res.data.newForm._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addNewFormToUser = (id) => {
    const { user, setUser, history } = this.props;
    let newFormIds = [...user.formIds, id];

    axios
      .post(`${backendUrl}/users/edit`, { ...user, formIds: newFormIds })
      .then((res) => {
        setUser({ ...user, formIds: newFormIds });
        history.push("/my-forms");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { membershipType } = this.state;
    return (
      <BodyWrapper>
        <Header />
        <ContentWrapper>
          <ContentBody>
            <div class="nk-block nk-block-middle nk-auth-body  wide-xs">
              <div class="card card-bordered">
                <div class="card-inner card-inner-lg">
                  <div class="nk-block-head">
                    <div class="nk-block-head-content">
                      <h4 class="nk-block-title">Create Form</h4>
                      <div class="nk-block-des">
                        <p>Add a descriptive name and set a redirect URL.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="default-01"
                        placeholder="Form Name"
                        onChange={(e) => {
                          this.setState({ name: e.target.value });
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <div class="form-control-wrap">
                        <input
                          type="password"
                          class="form-control form-control-lg"
                          id="text"
                          placeholder="Redirect URL (https://form2.io/thank-you)"
                          disabled={membershipType === "Free" ? true : false}
                          onChange={(e) => {
                            this.setState({ premiumEndPoint: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <button
                        class="btn btn-lg btn-primary btn-block"
                        onClick={() => {
                          this.createForms();
                        }}
                      >
                        CREATE FORM
                      </button>
                    </div>
                  </div>
                  <div class="form-note-s2 text-center pt-4">
                    {" "}
                    Enter the custom URL your form will redirect upon successful
                    submission.
                  </div>
                  <div class="text-center pt-4 pb-3">
                    <h6 class="overline-title overline-title-sap">
                      <span>OR</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </ContentBody>
        </ContentWrapper>
      </BodyWrapper>
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
  connect(mapStateToProps, mapDispatchToProps)(CreateForm)
);
