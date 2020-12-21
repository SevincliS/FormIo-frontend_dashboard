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
    PricingCard,
    SupportCard,
    PricingTable,
} from '../../components'

import PlanIconRibbon from '../../assets/icon/PlanIconRibbon.svg'
import PlanIconBadge from '../../assets/icon/PlanIconBadge.svg'
import PlanIconCup from '../../assets/icon/PlanIconCup.svg'





class Pricing extends React.Component {

    render(){
        return (
            <BodyWrapper>
                    <Header/>
                        <ContentWrapper>
                            <Sidebar/>  
                             <ContentBody>
                             <HeadWrapper>
                                <ContentHeading title={"Choose Suitable Plan"} subtitle={"Pricing"}  desc={"You can change your plan any time by upgrade your plan."}/>
                                </HeadWrapper>
                                    <Block>
                                        <div class="row g-gs">
                                                <PricingCard
                                                icon={PlanIconRibbon}
                                                title={"Starter"}
                                                desc={"If you are a small business amn please select this plan"}
                                                price={"99"}
                                                freq={"yr"}
                                                info={"1 User, Billed Yearly"}
                                                />
                                                <PricingCard
                                                icon={PlanIconBadge}
                                                title={"Pro"}
                                                desc={"If you are a small business amn please select this plan"}
                                                price={"299"}
                                                freq={"yr"}
                                                info={"5 User, Billed Yearly"}
                                                />
                                                <PricingCard
                                                icon={PlanIconCup}
                                                title={"Enterprise"}
                                                desc={"If you are a small business amn please select this plan"}
                                                price={"599"}
                                                freq={"yr"}
                                                info={"20 User, Billed Yearly"}
                                                />
                                        </div>
                                    </Block>
                                    <Block>
                                        <div class="card card-bordered">
                                         <PricingTable/>
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
    

export default Pricing


