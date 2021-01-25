import React from "react";

import { BodyWrapper, ContentWrapper, ContentBody, Block } from "../index";

import {
  Header,
  Sidebar,
  ContentHeading,
  TicketTable,
  SupportCard,
} from "../../components";
import HeadWrapper from "../Wrapper/HeadWrapper";

class Tickets extends React.Component {
  render() {
    return (
      <BodyWrapper>
        <Header />
        <ContentWrapper>
          <Sidebar />
          <ContentBody>
            <HeadWrapper>
              <ContentHeading
                title={"Support Ticket"}
                subtitle={"My Tickets"}
                desc={
                  "Here are all of your support request that you already sent."
                }
              />
              <div class="nk-block-head-content">
                <ul class="nk-block-tools g-4 flex-wrap">
                  <li class="order-md-last">
                    <a
                      href="#"
                      class="btn btn-white btn-dim btn-outline-primary"
                    >
                      <span>Submit Ticket</span>
                    </a>
                  </li>
                </ul>
              </div>
            </HeadWrapper>
            <Block>
              <div class="card card-bordered">
                <TicketTable />
              </div>
            </Block>
          </ContentBody>
        </ContentWrapper>
      </BodyWrapper>
    );
  }
}

export default Tickets;
