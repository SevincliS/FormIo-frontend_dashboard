import React from 'react';
import {NavLink} from 'react-router-dom'
class ProfileTopNavbar extends React.Component {

    render(){
        return (
            <ul class="nk-nav nav nav-tabs">
            <li class="nav-item">
                <NavLink to="/my-profile" exact className="nav-link">
                    Personal
                </NavLink>
            </li>
            <li class="nav-item">
                <NavLink to="/my-profile/billing" className="nav-link">
                    Billing
                </NavLink>
            </li>
            <li class="nav-item">
                <NavLink to="/my-profile/settings" className="nav-link">
                    Settings
                </NavLink>
            </li>
            <li class="nav-item">
                <NavLink to="/my-profile/notifications" className="nav-link">
                    Notifications
                </NavLink>
            </li>
        </ul>
            
        )
    }
}
    

export default ProfileTopNavbar


