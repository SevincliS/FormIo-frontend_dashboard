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
    PaymentHistoryTable,
    SupportCard,
} from '../../components'
import HeadWrapper from '../Wrapper/HeadWrapper';




class MySubscription extends React.Component {

    render(){
        return (
            <BodyWrapper>
                    <Header/>
                        <ContentWrapper>
                            <Sidebar/>  
                             <ContentBody>
                             <HeadWrapper>
                                <ContentHeading title={"Enterprise Plan"} subtitle={"My Subscrtiption"}  desc={"Your subscription renews on Oct 28, 2020 (11 months 16 days remaining)"}/>
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
                                        <div class="card card-bordered">
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
    

export default MySubscription


