import React from 'react';
import {NavLink} from 'react-router-dom'


class RegisterFooter extends React.Component {

    render(){
        return (
            <>
            <div class="form-note-s2 pt-4"> Already have an account ? <NavLink to="/login"><strong>Sign in instead</strong></NavLink>
                                </div>
                                <div class="text-center pt-4 pb-3">
                                    <h6 class="overline-title overline-title-sap"><span>OR</span></h6>
                                </div>
                                <ul class="nav justify-center gx-8">
                                    <li class="nav-item"><a class="nav-link" href="#">Facebook</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Google</a></li>
                                </ul>
                </>
        )
    }
}
    

export default RegisterFooter


