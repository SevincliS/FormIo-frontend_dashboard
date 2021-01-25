import React from "react";
import {
  BodyWrapper,
  ContentWrapper,
  ContentBody,
  Block,
  HeadWrapper,
  Personal,
  Settings,
  Notification,
  Billing,
} from "../index";

import {
  Header,
  Sidebar,
  ContentHeading,
  ProfileTopNavbar,
} from "../../components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class MyProfile extends React.Component {
  render() {
    return (
      <BodyWrapper>
        <Header />
        <ContentWrapper>
          <Sidebar />
          <ContentBody>
            <HeadWrapper>
              <ContentHeading
                title={"My Profile"}
                subtitle={"Account Setting"}
                desc={
                  "You have full control to manage your own account setting."
                }
              />
            </HeadWrapper>
            <ProfileTopNavbar />
            <Block>
              {this.props.subpage === "Personal" ? (
                <Personal />
              ) : this.props.subpage === "Billing" ? (
                <Billing />
              ) : this.props.subpage === "Settings" ? (
                <Settings />
              ) : this.props.subpage === "Notification" ? (
                <Notification />
              ) : null}
            </Block>
          </ContentBody>
        </ContentWrapper>
      </BodyWrapper>
    );
  }
}

export default MyProfile;
