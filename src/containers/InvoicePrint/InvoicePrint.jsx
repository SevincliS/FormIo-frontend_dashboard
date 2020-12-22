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




class InvoicePrint extends React.Component {

    render(){
        return (
            <BodyWrapper>
                <Block>
                <div class="invoice invoice-print">
                    <Invoice
                    logo={true}
                    print={false}
                    />
                    </div>
                </Block>                                  
            </BodyWrapper>
        )
    }
}
    

export default InvoicePrint


