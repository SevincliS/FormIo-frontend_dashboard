import React from 'react';
import {
    BodyWrapper,
    ContentWrapper,
    ContentBody,
    Block,
    HeadWrapper,
    Personal,
    Settings,
    Notification,
    Billing,
} from '../index'

import {
    Header, 
    Sidebar, 
    ContentHeading,
    ProfileTopNavbar,
} from '../../components'




class MyProfile extends React.Component {

    render(){
        return (
         
            <BodyWrapper>
                <Header/>
                    <ContentWrapper>
                        <Sidebar/>
                            <ContentBody>
                                <HeadWrapper>
                                <ContentHeading 
                                title={"My Profile"}  
                                subtitle={"Account Setting"}  
                                desc={"You have full control to manage your own account setting."}
                                />
                                </HeadWrapper>
                                <ProfileTopNavbar/>
                                <Block>
                                    <Billing/>
                                </Block>
                    </ContentBody>
                </ContentWrapper>
            </BodyWrapper>
        )
    }
}
    

export default MyProfile


