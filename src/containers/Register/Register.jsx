import React from 'react';
import {
    RegisterForm, 
    ToggleButton, 
    Logo, 
    FormHeading, 
    RegisterFooter,
    SplitFooter,        
    SplitContent,
} from '../../components'



class Register extends React.Component {
    render(){
        return(
            <div className="nk-body bg-white npc-default pg-auth">
                <div className="nk-app-root">
                    <div className="nk-main">
                        <div className="nk-wrap nk-wrap-nosidebar">
                            <div className="nk-content">
                                <div className="nk-split nk-split-page nk-split-md">
                                    <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white w-lg-45">
                                        <ToggleButton/>
                                    <div className="nk-block nk-block-middle nk-auth-body">
                                        <Logo/>
                                        <FormHeading title={"Register"} desc={"Create New Dashlite Account"}/>
                                        <RegisterForm/>
                                        <RegisterFooter/>
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

export default Register