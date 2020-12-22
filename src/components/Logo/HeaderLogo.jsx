import React from 'react';

import BrandLogo from '../../assets/img/form2-logo.svg'


class HeaderLogo extends React.Component {

    render(){
        return (
            <div class="nk-header-brand">
            <a class="logo-link">
                <img class="logo-light logo-img" src={BrandLogo} srcset={BrandLogo} alt="logo"/>
                <img class="logo-dark logo-img" src={BrandLogo} srcset={BrandLogo} alt="logo-dark"/>
            </a>
        </div>
        )
    }
}
    

export default HeaderLogo