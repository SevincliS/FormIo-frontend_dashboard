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
    Invoice,
} from '../../components'
import HeadWrapper from '../Wrapper/HeadWrapper';
import {Link} from 'react-router-dom'




class InvoiceDetail extends React.Component {

    render(){
        return (
            <BodyWrapper>
                    <Header/>
                        <ContentWrapper>
                            <Sidebar/>  
                             <ContentBody>
                             <HeadWrapper>
                                <ContentHeading 
                                title={"Invoice #746F5K2"} 
                                subtitle={
                                <Link to="/invoices">
                                <a class="back-to" href=""><em class="icon ni ni-arrow-left"></em><span>Invoices</span>
                                </a>
                                </Link>
                                }  
                                desc={"Your invoice details are given bellow."}/>
                                </HeadWrapper>
                                    <Block>
                                       <Invoice
                                       logo={true}
                                       print={true}
                                       />
                                    </Block>                                  
                    </ContentBody>
            </ContentWrapper>
        </BodyWrapper>
        )
    }
}
    

export default InvoiceDetail


