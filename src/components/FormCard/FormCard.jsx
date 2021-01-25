import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { backendUrl } from "../../config";

const UserForm = [
  {
    formName: "Hoops",
    newForms: "10",
    lastForms: "255",
    totalForms: "265",
  },
  {
    formName: "Possible",
    newForms: "10",
    lastForms: "255",
    totalForms: "265",
  },
  {
    formName: "Menatek",
    newForms: "10",
    lastForms: "255",
    totalForms: "265",
  },
];

class FormCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userForms: [] };
  }
  componentDidMount() {
    const { user } = this.props;
    let formIds = user.formIds;
    let userForms = [];
    axios
      .get(`${backendUrl}/forms/get`, { ids: formIds })
      .then((res) => {
        userForms.push(res.data);
        this.setState({ userForms: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { userForms } = this.state;
    let name = "";
    let submissionCount;
    return (
      userForms &&
      Object.entries(userForms).map(([el, formElement]) => {
        name = formElement.name;
        submissionCount = formElement.submissions.length;
        return (
          <div class="col-sm-6 col-xl-4">
            <div class="card card-bordered">
              <div class="card-inner">
                <div class="team">
                  <div class="team-options"></div>
                  <div class="user-card user-card-s2">
                    <div class="user-info">
                      <h6>{name}</h6>
                    </div>
                  </div>

                  <ul class="team-statistics">
                    <li>
                      <span>{submissionCount}</span>
                      <span>Submissions</span>
                    </li>
                  </ul>
                  <div class="team-view">
                    <a
                      href="html/user-details-regular.html"
                      class="btn btn-round btn-outline-light w-150px"
                    >
                      <span>View Forms</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FormCard)
);
