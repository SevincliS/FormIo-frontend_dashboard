import React from 'react';





class Billing extends React.Component {
    render(){
        return(
            <>
            <div class="nk-block-head">
                <div class="nk-block-head-content">
                    <h5 class="nk-block-title">Current Subscription</h5>
                    <div class="nk-block-des">
                        <p>Details about your current subscription and billing information.</p>
                    </div>
                </div>
            </div>
            <div class="card card-bordered">
                <div class="card-inner-group">
                    <div class="card-inner">
                        <div class="between-center flex-wrap flex-md-nowrap g-3">
                            <div class="nk-block-text">
                                <h6>Enterpise Plan - <span class="text-base">$599.00 / Yearly</span></h6>
                                <p class="text-soft">Unlimited access with priority support, 99.95% uptime, powerfull features and more...</p>
                            </div>
                            <div class="nk-block-actions flex-shrink-0">
                                <a href="#" class="btn btn-primary">Change Plan</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-inner">
                        <div class="between-center flex-wrap flex-md-nowrap g-3">
                            <div class="nk-block-text">
                                <p>Learn more about our <a href="#">subscription options</a>.</p>
                            </div>
                            <div class="nk-block-actions">
                                <ul class="align-center gx-3">
                                    <li>
                                        <div class="custom-control custom-control-right custom-switch">
                                            <input type="checkbox" class="custom-control-input" id="auto-renewal"/>
                                            <label class="custom-control-label" for="auto-renewal">Auto Renewal</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="nk-block-head">
                <div class="nk-block-head-content">
                    <h5 class="nk-block-title">Billing Cycle</h5>
                    <div class="nk-block-des">
                        <p>Your subscription renews on Jan 28, 2020 <span class="fs-13px text-soft">(2 months 17 days remaining).</span></p>
                    </div>
                </div>
            </div>
            <div class="card card-bordered">
                <div class="card-inner-group">
                    <div class="card-inner">
                        <div class="between-center flex-wrap flex-md-nowrap g-3">
                            <div class="nk-block-text">
                                <h6>Yearly Subscription</h6>
                                <ul class="list-inline list-col2 text-soft">
                                    <li>Next payment: <strong class="text-base">$599.00 USD</strong> on <strong class="text-base">Jan 28, 2020</strong></li>
                                    <li>Last payment made: Jan 28, 2019</li>
                                </ul>
                            </div>
                            <div class="nk-block-actions">
                                <ul class="align-center gx-3">
                                    <li class="order-md-last">
                                        <a href="#" class="link link-primary">Switch Billing Cycle</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="nk-block-head">
                <div class="nk-block-head-content">
                    <h5 class="nk-block-title">Manage Liceneses</h5>
                </div>
            </div>
            <div class="card card-bordered">
                <div class="card-inner-group">
                    <div class="card-inner">
                        <div class="between-center flex-wrap flex-md-nowrap g-3">
                            <div class="nk-block-text">
                                <h6>20 Licenses</h6>
                                <p class="text-soft">Licenssed members have full access to all NioAccount Features.</p>
                            </div>
                            <div class="nk-block-actions">
                                <ul class="align-center gx-3">
                                    <li class="order-md-last">
                                        <a href="#" class="link link-primary">Manage License</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </>
       
        )
    }
}





    

export default Billing



