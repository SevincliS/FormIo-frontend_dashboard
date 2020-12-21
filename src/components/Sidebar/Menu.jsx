import React from 'react';
import {MenuBottom} from '../'
import {BrowserRouter as Router, Link} from 'react-router-dom'


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
        "link" : "",
        "icon" : `ni-account-setting`,
        "title": "Account Setting"
    },
]


const MenuRow = MenuItem.map((Item) => {
        return (
            <li class="nk-menu-item">
                <a href={Item.link} class="nk-menu-link">
                    <span class="nk-menu-icon"><em class={`icon ni ${Item.icon}`}></em></span>
                    <span class="nk-menu-text">{Item.title}</span>
                </a>
            </li>
        )
}) 

class Menu extends React.Component {

    render(){
        return (
            <>
            <Router>
            <ul class="nk-menu">
                <li class="nk-menu-heading">
                    <h6 class="overline-title">Menu</h6>
                </li>
                {MenuRow}
                <MenuBottom/>                         
            </ul>
            </Router>
            </>
        )
    }
}
    

export default Menu


