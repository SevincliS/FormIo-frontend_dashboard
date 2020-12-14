import React from 'react';

import BrandLogo from '../../assets/img/form2-logo.svg'


class Logo extends React.Component {

    render(){
        return (
            <div class="brand-logo pb-5">
               <a href="html/index.html" class="logo-link">
                 <img class="logo-light logo-img logo-img-lg" src={BrandLogo} srcSet={BrandLogo} alt="logo" />
                <img class="logo-dark logo-img logo-img-lg" src={BrandLogo} srcSet={BrandLogo} alt="logo-dark" />
             </a>
         </div>
        )
    }
}
    

export default Logo