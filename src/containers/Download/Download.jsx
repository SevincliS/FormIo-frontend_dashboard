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
    DownloadCard,
    SupportCard,
} from '../../components'
import HeadWrapper from '../Wrapper/HeadWrapper';




class Download extends React.Component {

    render(){
        return (
            <BodyWrapper>
                    <Header/>
                        <ContentWrapper>
                            <Sidebar/>  
                             <ContentBody>
                             <HeadWrapper>
                                <ContentHeading 
                                title={"Form Downloads"} 
                                subtitle={"Download"}  
                                desc={"You can download all the application that available in your plan."}
                                />
                                </HeadWrapper>
                                    <Block>  
                                        <DownloadCard/>
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
    

export default Download


