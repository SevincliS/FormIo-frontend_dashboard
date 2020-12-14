import React from 'react';


class FormFooter extends React.Component {

    render(){
        return (
            <>
            <div class="form-note-s2 pt-4"> New on our platform? <a href="register.html">Create an account</a>
            </div>
            <div class="text-center pt-4 pb-3">
             <h6 class="overline-title overline-title-sap"><span>OR</span></h6>
                </div>
                 <ul class="nav justify-center gx-4">
                    <li class="nav-item"><a class="nav-link" href="#">Facebook</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Google</a></li>
                  </ul>
                  <div class="text-center mt-5">
                     <span class="fw-500">I don't have an account? <a href="register.html">Try 15 days free</a></span>
                   </div>
                </>
        )
    }
}
    

export default FormFooter


