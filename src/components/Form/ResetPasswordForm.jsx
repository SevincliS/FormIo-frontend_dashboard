import React from 'react';
import {Button} from '../index'
import {NavLink} from 'react-router-dom'



class ResetPasswordForm extends React.Component {
    render(){
        return(
            <form action="auth-success.html">
            <div class="form-group">
                <div class="form-label-group">
                    <label class="form-label" for="default-01">Email</label>
                    <a class="link link-primary link-sm" href="#">Need Help?</a>
                </div>
                <input type="text" class="form-control form-control-lg" id="default-01" placeholder="Enter your email address"/>
            </div>
            <div class="form-group">
                <NavLink exact to="/reset-success">
                <Button name={"Send Reset Link"}/>
                </NavLink>
            </div>
        </form>
                                
                               
        )
    }
}

export default ResetPasswordForm