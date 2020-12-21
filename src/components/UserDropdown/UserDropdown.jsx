import React, {useState} from 'react';


const UserDropdown = props => {

    const [isOpen, setOpen] = useState(false)

        return (
            
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
                                        <li><a href="profile.html"><em class="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                                        <li><a href="profile-setting.html"><em class="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                                        <li><a href="profile-activity.html"><em class="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
                                        <li><a class="dark-switch" href="#"><em class="icon ni ni-moon"></em><span>Dark Mode</span></a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-inner">
                                    <ul class="link-list">
                                        <li><a href="#"><em class="icon ni ni-signout"></em><span>Sign out</span></a></li>
                                    </ul>
                                </div>
                    </div>
                 </li>
                
        )
   
}
    

export default UserDropdown


