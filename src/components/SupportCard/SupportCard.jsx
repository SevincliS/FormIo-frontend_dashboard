import React from 'react';
import {SupportIcon} from '../../assets/icon/icon'

class SupportCard extends React.Component {

    render(){
        return (
            <div class="card card-bordered">
            <div class="card-inner">
                <div class="nk-help">
                    <div class="nk-help-img">
                       <SupportIcon/>
                    </div>
                    <div class="nk-help-text">
                        <h5>We’re here to help you!</h5>
                        <p class="text-soft">Ask a question or file a support ticketn or report an issues. Our team support team will get back to you by email.</p>
                    </div>
                    <div class="nk-help-action">
                        <a href="contact.html" class="btn btn-lg btn-outline-primary">Get Support Now</a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
    

export default SupportCard



