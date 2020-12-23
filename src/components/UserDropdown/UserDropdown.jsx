import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'


const UserDropdown = props => {

    const [isOpen, setOpen] = useState(false)

        return (
            <>
            <li class="dropdown user-dropdown">
               <a onClick={() => setOpen(!isOpen)} class="dropdown-toggle" data-toggle="dropdown">
                    <div class="user-toggle">
                        <div class="user-avatar sm">
                            <em class="icon ni ni-user-alt"></em>
                        </div>
                        <div class="user-name dropdown-indicator d-none d-sm-block">
                            {props.name}
                        </div>
                    </div>
                </a>
                    <div class={`dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1 ${isOpen ? `show` : null}`}>
                        <div class="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                            <div class="user-card">
                                <div class="user-avatar">
                                    <span>AB</span>
                                </div>
                                <div class="user-info">
                                    <span class="lead-text">{props.name}</span>
                                    <span class="sub-text">hello@hoops.com.tr</span>
                                </div>
                                <div class="user-action">
                                    <a class="btn btn-icon mr-n2" href="profile-setting.html"><em class="icon ni ni-setting"></em></a>
                                </div>
                                </div>
                            </div>
                                <div class="dropdown-inner">
                                    <ul class="link-list">
                                        <li>
                                            <NavLink to="/my-profile" exact={true} >
                                            <em class="icon ni ni-user-alt"></em><span>View Profile</span>
                                            </NavLink>
                                        </li>

                                        <li>
                                        <NavLink to="/my-profile/settings" exact={true} >
                                            <em class="icon ni ni-setting-alt"></em><span>Account Setting</span>
                                        </NavLink>
                                            </li>
                                        <li>
                                        <NavLink to="/my-profile/settings" exact={true} >
                                            <em class="icon ni ni-activity-alt"></em><span>Login Activity</span>
                                        
                                        </NavLink>
                                        </li>
                                        <li>
                                        <NavLink className="dark-switch" to="/my-profile" exact={true} >
                                            <em class="icon ni ni-moon"></em><span>Dark Mode</span>
                                            
                                        </NavLink>
                                            </li>
                                    </ul>
                                </div>
                                <div class="dropdown-inner">
                                    <ul class="link-list">
                                        <li><a href="#"><em class="icon ni ni-signout"></em><span>Sign out</span></a></li>
                                    </ul>
                                </div>
                    </div>
                 </li>
                 {isOpen ? <div onClick={() => setOpen(!isOpen) } className="shadow-box"></div>  : null }
                 
            
               </> 
        )
   
}
    

export default UserDropdown


