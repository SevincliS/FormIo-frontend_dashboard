import React from 'react';

import {
    BodyWrapper,
    ContentWrapper,
    ContentBody,
    Block,
} from '../index'

import {
    Header, 
    Sidebar, 
    ContentHeading,
    SubscriptionCard,
    SupportCard,
    PaymentCard,
    PaymentHistoryTable,
} from '../../components'
import HeadWrapper from '../Wrapper/HeadWrapper';




class SubscriptionDetail extends React.Component {

    render(){
        return (
            <BodyWrapper>
                    <Header/>
                        <ContentWrapper>
                            <Sidebar/>  
                             <ContentBody>
                             <HeadWrapper>
                                <ContentHeading title={"Enterprise Plan"} subtitle={<a class="back-to" href="html/subscription/subscriptions.html"><em class="icon ni ni-arrow-left"></em><span>Subscription</span></a>}  desc={"Your subscription renews on Oct 28, 2020 (11 months 16 days remaining)"}/>
                                <div class="nk-block-head-content">
                                                <ul class="nk-block-tools justify-content-md-end g-4 flex-wrap">
                                                    <li class="order-md-last">
                                                        <a href="#" class="btn btn-auto btn-dim btn-danger" data-toggle="modal" data-target="#subscription-cancel"><em class="icon ni ni-cross"></em><span>Cancel Subscription</span></a></li>
                                                    <li>
                                                        <div class="custom-control custom-switch">
                                                            <input type="checkbox" class="custom-control-input" checked="" id="auto-renew"/>
                                                            <label class="custom-control-label text-soft" for="auto-renew">Auto Renew</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                </HeadWrapper>
                                    <Block>
                                        <SubscriptionCard
                                        title={"Enterprise Plan "}
                                        status={"Active"}
                                        id={"100394949"}
                                        date={"Oct 12, 2018"}
                                        recuring={"Yes"}
                                        price={"599.00"}
                                        access={"Unlimited"}
                                        dateBill={"Oct 11, 2020"}
                                        />
                                    </Block>
                                    <Block>
                                    <div class="row">
                                            <div class="col-xl-12">
                                        <PaymentCard/>
                                        </div>
                                        </div>
                                    </Block>
                                    <Block>
                                    <div class="card card-bordered">
                                        <div class="card-inner card-inner-md">
                                            <div class="card-title-group">
                                                <h6 class="card-title">
                                                    Payment History
                                                </h6>
                                                <div class="card-action">
                                                        <a href="payments.html" class="link link-sm">
                                                         Download Statement
    
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                            <PaymentHistoryTable/> 
                                        </div>     
                                    </Block>   
                                    <Block>
                                        <SupportCard/>
                                    </Block>   
                    </ContentBody>
            </ContentWrapper>
        </BodyWrapper>
        )
    }
}
    

export default SubscriptionDetail


