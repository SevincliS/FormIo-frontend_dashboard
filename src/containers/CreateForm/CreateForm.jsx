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
} from '../../components'




class CreateForm extends React.Component {

    render(){
        return (
            <BodyWrapper>
                    <Header/>
                        <ContentWrapper>
                             <ContentBody>
                             <div class="nk-block nk-block-middle nk-auth-body  wide-xs">
                                    <div class="card card-bordered">
                            <div class="card-inner card-inner-lg">
                                <div class="nk-block-head">
                                    <div class="nk-block-head-content">
                                        <h4 class="nk-block-title">Create Form</h4>
                                        <div class="nk-block-des">
                                            <p>Add a descriptive name and set a redirect URL.</p>
                                        </div>
                                    </div>
                                </div>
                                <form action="my-forms.html">
                                    <div class="form-group">
                                       
                                        <input type="text" class="form-control form-control-lg" id="default-01" placeholder="Form Name"/>
                                    </div>
                                    <div class="form-group">
                                       
                                        <div class="form-control-wrap">
                                            
                                            <input type="password" class="form-control form-control-lg" id="text" placeholder="Redirect URL (https://form2.io/thank-you)"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button class="btn btn-lg btn-primary btn-block">CREATE FORM</button>
                                    </div>
                                </form>
                                <div class="form-note-s2 text-center pt-4"> Enter the custom URL your form will redirect upon successful submission.
                                </div>
                                <div class="text-center pt-4 pb-3">
                                    <h6 class="overline-title overline-title-sap"><span>OR</span></h6>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    </ContentBody>
            </ContentWrapper>
        </BodyWrapper>
        )
    }
}
    

export default CreateForm


