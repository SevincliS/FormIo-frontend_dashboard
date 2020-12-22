import React from 'react';

import {
    BodyWrapper,
    ContentWrapper,
    ContentBody,
    Block,
    HeadWrapper,
} from '../index'

import {
    Header, 
    Sidebar, 
    ContentHeading,
    NavCard,
    PricePlanCard,
    SupportCard,
    PaymentHistoryTable,
} from '../../components'

import {
    PersonalIcon,
    SecurityIcon,
    BillingIcon,
    AccountIcon,
    
} from '../../assets/icon/icon'


class Dashboard extends React.Component {

    render(){
        return (
            <BodyWrapper>
                    <Header/>
                        <ContentWrapper>
                            <Sidebar/>  
                             <ContentBody>
                                <HeadWrapper>
                                    <ContentHeading title={"Welcome, Barış Biber"}  desc={"Welcome to our dashboard. Manage your account and your subscriptions or forms settings."}/>
                                </HeadWrapper>
                                    <Block>
                                        <div className="row g-gs">
                                            <div className="col-md-6">
                                                <NavCard 
                                                icon={<PersonalIcon/>} 
                                                title={"Personal Info"}
                                                desc={"See your profile data and manage your Account to choose what is saved in our system."}
                                                navtitle={"Manage Your Account"}
                                                link={"/my-profile"}
                                                />
                                            </div>
                                            <div className="col-md-6">

                                                <NavCard 
                                                icon={<SecurityIcon/>} 
                                                title={"Security Setting"}
                                                desc={"You have full control to manage your own account and keep account fully secure."}
                                                navtitle={"Account Setting"}
                                                link={"/my-profile/settings"}
                                                />
                                            </div>
                                            <div className="col-md-6">

                                                <NavCard 
                                                icon={<BillingIcon/>} 
                                                title={"Billing History"}
                                                desc={"Check out all your payment history. You can also download or print your invoice."}
                                                navtitle={"Payment History"}
                                                link={"/my-profile/billing"}

                                                />
                                            </div>
                                            <div className="col-md-6">

                                                <NavCard 
                                                icon={<AccountIcon/>} 
                                                title={"Account Reports"}
                                                desc={"Check your reports of uses and manage your packages or subscriptions that you have."}
                                                navtitle={"Manage Subscription"}
                                                link={"/my-subscription"}

                                                />
                                            </div>
                                        </div>
                                    </Block>
                                    <Block>
                                        <PricePlanCard 
                                        title={"Enterpise Plan"}
                                        price={"$599"}
                                        frequency={"Yearly"}
                                        text={"Unlimited access with priority support, 99.95% uptime, powerfull features and more..."}
                                        />
                                    </Block>
                                    <Block>
                                        <SupportCard/>
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
                                                         See All
                                                        <em class="icon ni ni-chevron-right">
                                                        </em>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                            <PaymentHistoryTable/> 
                                        </div>   
                                    </Block>   
                    </ContentBody>
            </ContentWrapper>
        </BodyWrapper>
        )
    }
}
    

export default Dashboard


