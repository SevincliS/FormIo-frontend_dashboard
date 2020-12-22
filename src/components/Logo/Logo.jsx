import React from 'react';
import BrandLogo from '../../assets/img/form2-logo.svg'
import {Link} from 'react-router-dom'


class Logo extends React.Component {

    render(){
        return (
            <div class="brand-logo pb-5">
                <Link to="/">
               <a href="" class="logo-link">
                 <img class="logo-light logo-img logo-img-lg" src={BrandLogo} srcSet={BrandLogo} alt="logo" />
                <img class="logo-dark logo-img logo-img-lg" src={BrandLogo} srcSet={BrandLogo} alt="logo-dark" />
             </a>
             </Link>
         </div>
        )
    }
}
    

export default Logo