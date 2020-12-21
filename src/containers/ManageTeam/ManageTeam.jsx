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
    TeamTable,
} from '../../components'
import HeadWrapper from '../Wrapper/HeadWrapper';




class ManageTeam extends React.Component {

    render(){
        return (
            <BodyWrapper>
                    <Header/>
                        <ContentWrapper>
                            <Sidebar/>  
                             <ContentBody>
                             <HeadWrapper>
                                <ContentHeading title={"Manage Team"} subtitle={"Team Members"}  desc={"You can add and remove team member as you want."}/>
                                <div class="nk-block-head-content">
                                    <ul class="nk-block-tools gx-3">
                                        <li><a href="#" class="btn btn-primary">Invite New Member</a></li>
                                    </ul>
                                </div>
                                </HeadWrapper>
                                    <Block>
                                        <div class="card card-bordered">
                                            <TeamTable/>
                                        </div>    
                                    </Block>   
                    </ContentBody>
            </ContentWrapper>
        </BodyWrapper>
        )
    }
}
    

export default ManageTeam


