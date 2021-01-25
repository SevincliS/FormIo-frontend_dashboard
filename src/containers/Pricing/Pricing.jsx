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
  ContentHeading,
  PricingCard,
  SupportCard,
  PricingTable,
} from "../../components";

import PlanIconRibbon from "../../assets/icon/PlanIconRibbon.svg";
import PlanIconBadge from "../../assets/icon/PlanIconBadge.svg";
import PlanIconCup from "../../assets/icon/PlanIconCup.svg";
import axios from "axios";
import { backendUrl } from "../../config";
class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyMemberships: [],
      yearlyMemberships: [],
      isMonthlyChecked: true,
    };
  }

  componentDidMount() {
    this.getMemberships();
  }

  getMemberships = () => {
    let memberships;
    let monthlyMemberships;
    let yearlyMemberships;
    axios.get(`${backendUrl}/memberships/get`).then((res) => {
      memberships = res.data.filter((membership) => membership.name !== "Free");
      monthlyMemberships = memberships.filter(
        (membership) => membership.type === "Monthly"
      );
      yearlyMemberships = memberships.filter(
        (membership) => membership.type === "Yearly"
      );
      this.setState({ monthlyMemberships, yearlyMemberships });
    });
  };

  renderMonthlyMemberships = () => {
    const { monthlyMemberships } = this.state;
    return monthlyMemberships.map((membership) => (
      <PricingCard
        icon={PlanIconRibbon}
        title={membership.name}
        desc={"If you are a small business amn please select this plan"}
        price={membership.price}
        freq={"/month"}
        info={"Billed Monthly"}
      />
    ));
  };
  renderYearlyMemberships = () => {
    const { yearlyMemberships } = this.state;
    return yearlyMemberships.map((membership) => (
      <PricingCard
        icon={PlanIconRibbon}
        title={membership.name}
        desc={"If you are a small business amn please select this plan"}
        price={membership.price}
        freq={"/year"}
        info={"Billed Yearly"}
      />
    ));
  };

  render() {
    const { isMonthlyChecked } = this.state;
    return (
      <BodyWrapper>
        <Header />
        <ContentWrapper>
          <Sidebar />
          <ContentBody>
            <HeadWrapper>
              <ContentHeading
                title={"Choose Suitable Plan"}
                subtitle={"Pricing"}
                desc={"You can change your plan any time by upgrade your plan."}
              />
            </HeadWrapper>
            <input
              type="checkbox"
              onChange={() => {
                this.setState({ isMonthlyChecked: !isMonthlyChecked });
              }}
              defaultChecked={isMonthlyChecked}
            ></input>
            <Block>
              <div class="row g-gs">
                {isMonthlyChecked
                  ? this.renderMonthlyMemberships()
                  : this.renderYearlyMemberships()}
              </div>
            </Block>
            <Block>
              <div class="card card-bordered">
                <PricingTable />
              </div>
            </Block>
            <Block>
              <SupportCard />
            </Block>
          </ContentBody>
        </ContentWrapper>
      </BodyWrapper>
    );
  }
}

export default Pricing;
