import React from 'react';
import {NavLink} from 'react-router-dom'


class MenuBottom extends React.Component {

    render(){
        return (
            <>
            <li class="nk-menu-heading">
                <h6 class="overline-title">See Others</h6>
            </li>
            <li class="nk-menu-item">
                <ul class="nk-menu-sub">
                <NavLink exact={true} activeClassName="isActive" to="/pricing">
                    <li class="nk-menu-item">
                        <a href="" class="nk-menu-link">
                            <span class="nk-menu-text">
                                Pricing
                            </span>
                        </a>
                    </li>
                </NavLink>
                <NavLink exact={true} activeClassName="isActive" to="/invoices">
                    <li class="nk-menu-item">
                        <a href="" class="nk-menu-link">
                            <span class="nk-menu-text">
                                Invoices <span class="count">(2)</span>
                            </span>
                        </a>
                    </li>
                    </NavLink>
                    <NavLink exact={true} activeClassName="isActive" to="/tickets">
                    <li class="nk-menu-item">
                        <a href="" class="nk-menu-link">
                            <span class="nk-menu-text">
                                Tickets <span class="count">(5)</span>
                            </span>
                        </a>
                        </li>
                        </NavLink>
                        <NavLink exact={true} activeClassName="isActive" to="/subscription-detail">
                    <li class="nk-menu-item">
                        <a href="" class="nk-menu-link">
                            <span class="nk-menu-text">
                                Subscription Details
                            </span>
                        </a>
                    </li>
                    </NavLink>
                </ul>
            </li>
            </>
        )
    }
}
    

export default MenuBottom





