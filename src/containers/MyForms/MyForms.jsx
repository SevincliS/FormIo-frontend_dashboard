import React from "react";
import {
  BodyWrapper,
  ContentWrapper,
  ContentBody,
  Block,
  HeadWrapper,
} from "../index";

import {
  Header,
  Sidebar,
  Footer,
  ContentHeading,
  FormCard,
  NewFormCard,
} from "../../components";
import axios from "axios";
import { backendUrl } from "../../config";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class MyForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formCount: 0,
    };
  }

  componentDidMount() {
    const { user } = this.props;
    axios
      .get(`${backendUrl}/forms/get`, { ids: user.formIds })
      .then((res) => {
        this.setState({ formCount: res.data.length });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { formCount } = this.state;
    return (
      <BodyWrapper>
        <Header />
        <ContentWrapper>
          <Sidebar />
          <ContentBody>
            <HeadWrapper>
              <ContentHeading
                title={"My Forms"}
                desc={`You have total ${formCount} forms.`}
              />
            </HeadWrapper>
            <Block>
              <div class="row g-gs">
                <NewFormCard />
                <FormCard />
              </div>
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
  connect(mapStateToProps, mapDispatchToProps)(MyForms)
);
