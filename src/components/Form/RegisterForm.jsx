import React from 'react';
import {Button} from '../index'



class RegisterForm extends React.Component {
    render(){
        return(
            <form action="html/pages/auths/auth-success.html">
            <div class="form-group">
                <label class="form-label" for="name">Name</label>
                <input type="text" class="form-control form-control-lg" id="name" placeholder="Enter your name"/>
            </div>
            <div class="form-group">
                <label class="form-label" for="email">Email or Username</label>
                <input type="text" class="form-control form-control-lg" id="email" placeholder="Enter your email address or username"/>
            </div>
            <div class="form-group">
                <label class="form-label" for="password">Passcode</label>
                <div class="form-control-wrap">
                    <a tabindex="-1" href="#" class="form-icon form-icon-right passcode-switch" data-target="password">
                        <em class="passcode-icon icon-show icon ni ni-eye"></em>
                        <em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
                    </a>
                    <input type="password" class="form-control form-control-lg" id="password" placeholder="Enter your passcode"/>
                </div>
            </div>
            <div class="form-group">
                <div class="custom-control custom-control-xs custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="checkbox"/>
                    <label class="custom-control-label" for="checkbox">I agree to Dashlite <a tabindex="-1" href="#">Privacy Policy</a> &amp; <a tabindex="-1" href="#"> Terms.</a></label>
                </div>
            </div>
            <Button name={"Register"}/>
        </form>
                                
                               
        )
    }
}

export default RegisterForm