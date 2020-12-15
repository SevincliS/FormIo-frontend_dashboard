import React from 'react';



class MenuBottom extends React.Component {

    render(){
        return (
            <>
            <li class="nk-menu-heading">
                <h6 class="overline-title">See Others</h6>
            </li>
            <li class="nk-menu-item">
                <a href="#" class="nk-menu-link">
                    <span class="nk-menu-icon"><em class="icon ni ni-files"></em></span>
                    <span class="nk-menu-text">Pre-Built Pages</span>
                </a>
                <ul class="nk-menu-sub">
                    <li class="nk-menu-item">
                        <a href="pricing.html" class="nk-menu-link">
                            <span class="nk-menu-text">
                                Pricing
                            </span>
                        </a>
                    </li>
                    <li class="nk-menu-item">
                        <a href="invoices.html" class="nk-menu-link">
                            <span class="nk-menu-text">
                                Invoices <span class="count">(2)</span>
                            </span>
                        </a>
                    </li>
                    <li class="nk-menu-item">
                        <a href="tickets.html" class="nk-menu-link">
                            <span class="nk-menu-text">
                                Tickets <span class="count">(5)</span>
                            </span>
                        </a>
                        </li>
                    <li class="nk-menu-item">
                        <a href="subscriptions-detail.html" class="nk-menu-link">
                            <span class="nk-menu-text">
                                Subscription Details
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
            </>
        )
    }
}
    

export default MenuBottom





