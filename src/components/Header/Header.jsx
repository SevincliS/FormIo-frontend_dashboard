import React from 'react';
import {UserDropdown,NotificationDropdown,HeaderLogo} from '../'

class Header extends React.Component {

    render(){
        return (
            <>
            <div class="nk-header nk-header-fixed is-light">
                <div class="container-lg wide-xl">
                    <div class="nk-header-wrap">
                                <HeaderLogo/>
                        <div class="nk-header-tools">
                            <ul class="nk-quick-nav">
                                <UserDropdown name={"Barış Biber"}/>
                                <NotificationDropdown/>
                                <li class="d-lg-none">
                                   <a href="#" class="toggle nk-quick-nav-icon mr-n1" data-target="sideNav"><em class="icon ni ni-menu"></em></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                </>
        )
    }
}
    

export default Header


