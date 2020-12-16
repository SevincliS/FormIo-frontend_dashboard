import React from 'react';

class SubscriptionCard extends React.Component {

    render(){
        return (
            <div class="card card-bordered sp-plan">
            <div class="row no-gutters">
                <div class="col-md-8">
                    <div class="sp-plan-info card-inner">
                        <div class="row gx-0 gy-3">
                            <div class="col-xl-9 col-sm-8">
                                <div class="sp-plan-name">
                                    <h6 class="title"><a href="html/subscription/subscriptions-detail.html">{this.props.title} <span class="badge badge-success badge-pill">{this.props.status}</span></a></h6>
                                    <p>Subscription ID: <span class="text-base">{this.props.id}</span></p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-4">
                                <div class="sp-plan-opt">
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="auto-plan-p1" checked/>
                                        <label class="custom-control-label text-soft" for="auto-plan-p1">Auto Renew</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sp-plan-desc card-inner">
                        <ul class="row gx-1">
                            <li class="col-6 col-lg-3">
                                <p><span class="text-soft">Started On</span> {this.props.date}</p>
                            </li>
                            <li class="col-6 col-lg-3">
                                <p><span class="text-soft">Recuring</span>{this.props.recuring}</p>
                            </li>
                            <li class="col-6 col-lg-3">
                                <p><span class="text-soft">Price</span>${this.props.price}</p>
                            </li>
                            <li class="col-6 col-lg-3">
                                <p><span class="text-soft">Access</span> {this.props.access}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sp-plan-action card-inner">
                        <div class="sp-plan-btn">
                            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#subscription-change"><span>Change Plan</span></a>
                        </div>
                        <div class="sp-plan-note text-md-center">
                            <p>Next Billing on <span>{this.props.dateBill}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
    

export default SubscriptionCard



