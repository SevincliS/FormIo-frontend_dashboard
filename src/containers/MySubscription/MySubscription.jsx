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
                                <ContentHeading title={"My Subscription"} subtitle={"Manage Subscription"}  desc={"Here is list of package/product that you have subscribed.)"}/>
                                        <div class="nk-block-head-content">
                                            <ul class="nk-block-tools gx-3">
                                                <li class="order-md-last"><a href="pricing.html" class="btn btn-white btn-dim btn-outline-primary"><span>View Pricing</span></a></li>
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
                                         <SubscriptionCard
                                        title={"Pro Plan"}
                                        status={"Expired"}
                                        id={"100142725"}
                                        date={"Oct 12, 2017"}
                                        recuring={"Yes"}
                                        price={"249.00"}
                                        access={"Up to 10 Members"}
                                        dateBill={"Oct 11, 2020"}
                                        />
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


