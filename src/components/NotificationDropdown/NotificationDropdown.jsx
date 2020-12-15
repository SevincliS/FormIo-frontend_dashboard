import React from 'react';


const Notifications = [
    {
        "link": "",
        "text" : "You have requested to Widthdrawl",
        "time" : "2",
        "timeType" : "hrs",
        "type" : "bg-warning-dim",
        "icon" : "ni-curve-down-right",

    },
    {
        "link": "",
        "text" : "Your Deposit Order is placed",
        "time" : "2",
        "timeType" : "hrs",
        "type" : "bg-success-dim",
        "icon" : "ni-curve-down-left",

    },
    {
        "link": "",
        "text" : "You have requested to Widthdrawl",
        "time" : "2",
        "timeType" : "hrs",
        "type" : "bg-warning-dim",
        "icon" : "ni-curve-down-right",

    },
    
]


const NotificationRow = Notifications.map((NotificationElement) => {
        return (
            <div class="nk-notification-item dropdown-inner">
            <div class="nk-notification-icon">
                <em class={`icon icon-circle ${NotificationElement.type} ni ${NotificationElement.icon}`}></em>
            </div>
            <div class="nk-notification-content">
                <div class="nk-notification-text">{NotificationElement.text}</div>
                <div class="nk-notification-time">{NotificationElement.time} {NotificationElement.timeType} ago</div>
            </div>
        </div>
        )
}) 



class NotificationDropdown extends React.Component {

    render(){
        return (
            <>
            <li class="dropdown notification-dropdown">
                <a href="#" class="dropdown-toggle nk-quick-nav-icon mr-lg-n1" data-toggle="dropdown">
                    <div class="icon-status icon-status-info">
                        <em class="icon ni ni-bell"></em>
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s1">
                    <div class="dropdown-head">
                        <span class="sub-title nk-dropdown-title">
                            Notifications
                        </span>
                        <a href="#">
                            Mark All as Read
                        </a>
                    </div>
                    <div class="dropdown-body">
                        <div class="nk-notification">
                            {NotificationRow}                                                   
                        </div>
                    </div>
                    <div class="dropdown-foot center">
                        <a href="#">
                            View All
                        </a>
                    </div>
                </div>
              </li>
            </>
        )
    }
}
    

export default NotificationDropdown


