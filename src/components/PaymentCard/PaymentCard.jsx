import React from 'react';


const UserPayment = [
    {
        "method"  : "**** **** **** 9484",
        "paid" : "Oct 12, 2018",
     },
     {
        "method"  : "Paypal (info@***io.com)",
        "paid" : "Oct 12, 2018",
     },
]


const UserPaymentRow = UserPayment.map((payment) => {
    return (
        <li>
        <a href="#" class="cc-pay-item">
            <em class="cc-pay-item-icon icon ni ni-cc-visa"></em>
            <span class="cc-pay-item-name">
                <span class="cc-pay-item-method">{payment.method}</span>
                <span class="cc-pay-item-meta">Last paid {payment.paid}</span>
            </span>
        </a>
    </li>
    )
})


class PaymentCard extends React.Component {

    render(){
        return (
            <div class="card card-bordered">
            <div class="card-inner-group">
                <div class="card-inner">
                    <div class="sp-plan-head-group">
                        <div class="sp-plan-head">
                            <h6 class="title">Next Payment</h6>
                        </div>
                        <div class="sp-plan-amount">
                            <span class="sp-plan-status text-warning">Due</span> <span class="amount">$599.00</span>
                        </div>
                    </div>
                    <div class="sp-plan-payopt">
                        <div class="cc-pay">
                            <h6 class="title">Pay With</h6>
                            <ul class="cc-pay-method">
                                <li class="cc-pay-dd dropdown">
                                    <a href="#" class="btn btn-white btn-outline-light dropdown-toggle dropdown-indicator" data-toggle="dropdown">
                                        <em class="icon ni ni-visa"></em>
                                        <span>**** **** **** 9484</span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-auto">
                                        <ul class="link-list-plain">
                                            {UserPaymentRow}
                                            <li>
                                                <a href="#" class="cc-pay-item">
                                                    <span class="cc-pay-item-name">
                                                        <span class="cc-pay-item-method-new">Add New Credit Card</span>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="cc-pay-btn">
                                    <a href="#" class="btn btn-secondary"><span>Pay Now</span> <em class="icon ni ni-arrow-long-right"></em></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="card-inner">
                    <div class="sp-plan-link">
                        <a href="#" class="link">
                            <span><em class="icon ni ni-cc-alt"></em> Change Billing Method</span>
                            <em class="icon ni ni-arrow-right"></em>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
    

export default PaymentCard



