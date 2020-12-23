import React from 'react';
import {
    ResetPasswordForm,
    ToggleButton, 
    Logo, 
    FormHeading, 
    LoginFooter,
    SplitFooter,        
    SplitContent,
} from '../../components'



class ResetSuccess extends React.Component {
    render(){
        return(
            <div className="nk-body bg-white npc-default pg-auth">
                <div className="nk-app-root">
                    <div className="nk-main">
                        <div className="nk-wrap nk-wrap-nosidebar">
                            <div className="nk-content">
                                <div className="nk-split nk-split-page nk-split-md">
                                    <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
                                        <ToggleButton/>
                                    <div className="nk-block nk-block-middle nk-auth-body">
                                        <Logo/>
                                         <div class="nk-block-head">
                                         <div class="nk-block-head">
                                    <div class="nk-block-head-content">
                                        <h5 class="nk-block-title">Thank you for submitting form</h5>
                                        <div class="nk-block-des text-success">
                                            <p>You can now sign in with your new password</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                    </div>
                                        <SplitFooter/>
                                    </div>
                                        <SplitContent/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResetSuccess