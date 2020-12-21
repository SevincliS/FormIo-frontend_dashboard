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
    InvoiceTable,
} from '../../components'
import HeadWrapper from '../Wrapper/HeadWrapper';




class Invoices extends React.Component {

    render(){
        return (
            <BodyWrapper>
                    <Header/>
                        <ContentWrapper>
                            <Sidebar/>  
                             <ContentBody>
                             <HeadWrapper>
                                <ContentHeading title={"Payment History"} subtitle={"Account Billing"}  desc={"Here is your payment history of account."}/>
                                <div class="nk-block-head-content">
                                                <ul class="nk-block-tools gx-3">
                                                    <li><a href="html/subscription/invoices.html" class="btn btn-white btn-dim btn-outline-primary"><em class="icon ni ni-reports"></em><span><span class="d-none d-sm-inline-block">Get</span> Invoice</span></a></li>
                                                </ul>
                                </div>
                                </HeadWrapper>
                                    <Block>
                                        <div class="card card-bordered">
                                            <InvoiceTable/>
                                        </div>    
                                    </Block>   
                    </ContentBody>
            </ContentWrapper>
        </BodyWrapper>
        )
    }
}
    

export default Invoices


