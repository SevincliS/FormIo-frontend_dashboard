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
    Footer, 
    ContentHeading,
    FormCard,
    NewFormCard,
} from '../../components'



class MyForms extends React.Component {

    render(){
        return (
         
            <BodyWrapper>
                <Header/>
                    <ContentWrapper>
                        <Sidebar/>
                            <ContentBody>
                                <HeadWrapper>
                                <ContentHeading title={"My Forms"}  desc={"You have total 4 forms."}/>
                                </HeadWrapper>
                                    <Block>
                                    <div class="row g-gs">
                                        <NewFormCard/>
                                        <FormCard/>
                                    </div>
                                    </Block>
                    </ContentBody>
                </ContentWrapper>
            </BodyWrapper>
        )
    }
}
    

export default MyForms


