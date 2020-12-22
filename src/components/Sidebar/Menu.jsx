import React, {useState} from 'react';
import {MenuBottom} from '../'
import {NavLink} from 'react-router-dom'


const MenuItem = [
    {
        "link" : "/",
        "icon" : `ni-dashboard`,
        "title": "Dashboard"
    },
    {
        "link" : "my-forms",
        "icon" : `ni-files`,
        "title": "My Forms"
    },
    {
        "link" : "/my-subscription",
        "icon" : `ni-file-text`,
        "title": "My Subscription"
    },
    {
        "link" : "/payment-history",
        "icon" : `ni-report-profit`,
        "title": "Payment History"
    },
    {
        "link" : "/manage-team",
        "icon" : `ni-users`,
        "title": "Manage Team"
    },
    {
        "link" : "/download",
        "icon" : `ni-download-cloud`,
        "title": "Download"
    },
    {
        "link" : "/my-profile/settings",
        "icon" : `ni-account-setting`,
        "title": "Account Setting"
    },
]


const MenuRow = MenuItem.map((Item, props) => {
        return (      
            <li class={`nk-menu-item`}>
                <NavLink className="nk-menu-link" exact={true} activeClassName={"isActive"} to={Item.link} >
           
                    <span class="nk-menu-icon"><em class={`icon ni ${Item.icon}`}></em></span>
                    <span class="nk-menu-text">{Item.title}</span>
             
            </NavLink>
            </li>
        )
}) 

const Menu = props => { 
    const [isActive, setActive]= useState("dashboard")
        return (
            <>
            <ul class="nk-menu">
                <li class="nk-menu-heading">
                    <h6 class="overline-title">Menu</h6>
                </li>
                {MenuRow}
                <MenuBottom/>                         
            </ul>
            </>
        )

}
    

export default Menu


