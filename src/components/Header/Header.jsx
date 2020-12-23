import React from 'react';
import {UserDropdown,NotificationDropdown,HeaderLogo} from '../'
import {NavLink} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {menuActive} from '../../redux/actions'
import { colors } from '@material-ui/core';


const Header = () => {
const toggleMenu = useSelector(state => state.toggleMenu)
const dispatch = useDispatch()
        return (
            <>
            <div class="nk-header nk-header-fixed is-light">
                <div class="container-lg wide-xl">
                    <div class="nk-header-wrap">
                        <NavLink to="/">
                                <HeaderLogo/>
                        </NavLink>
                        <div class="nk-header-tools">
                            <ul class="nk-quick-nav">
                                <NavLink className="nk-menu-link header-link" to="/docs">Docs</NavLink>
                                <UserDropdown name={"Barış Biber"}/>
                                <NotificationDropdown/>
                                <li onClick={() => dispatch(menuActive())}  class="d-lg-none">
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
    

export default Header


