import React from 'react';
import {Button} from '../index'



class LoginForm extends React.Component {
    render(){
        return(
            <form action="index.html">
               <div className="form-group">
                   <div className="form-label-group">
                        <label className="form-label" for="default-01">Email or Username</label>
                            <a className="link link-primary link-sm" tabindex="-1" href="#">Need Help?</a>
                    </div>
                        <input type="text" className="form-control form-control-lg" id="default-01" placeholder="Enter your email address or username"/>
                </div>
                   <div className="form-group">
                      <div className="form-label-group">
                         <label className="form-label" for="password">Passcode</label>
                           <a className="link link-primary link-sm" tabindex="-1" href="auth-reset.html">Forgot Code?</a>
                              </div>
                                <div className="form-control-wrap">
                                 <a tabindex="-1" href="#" className="form-icon form-icon-right passcode-switch" data-target="password">
                                   <em className="passcode-icon icon-show icon ni ni-eye"></em>
                                    <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                     </a>
                                     <input type="password" className="form-control form-control-lg" id="password" placeholder="Enter your passcode"/>
                                        </div>
                                    </div>
                                    <Button name={"Log In"}/>
                                </form>
                                
                               
        )
    }
}

export default LoginForm