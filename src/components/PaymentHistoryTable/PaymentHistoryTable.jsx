import React from 'react';


const UserPayment = [
    {
        "id":"4947",
        "billFor": "Enterprize Year Subscrition",
        "issueDate": "10-05-2019",
        "dueDate" : "10-13-2019",
        "total" : "$599.00",
        "status" : "Due",
        "icon" : "warning"
    },
    {
        "id":"4904",
        "billFor": "Maintenance Year Subscription",
        "issueDate": "06-19-2019",
        "dueDate" : "06-26-2019",
        "total" :  "$99.00",
        "status" : "Paid",
        "icon" : "success"
    },
    {
        "id":"4829",
        "billFor": "Enterprize Year Subscrition",
        "issueDate": "10-04-2018",
        "dueDate" : "10-12-2018",
        "total" : "$599.00",
        "status" : "Paid",
        "icon" : "success"
    },
]


const PaymentRow = UserPayment.map((Payment) => {
    return (
                    <tr class="tb-tnx-item">
                            <td class="tb-tnx-id">
                                <a href="#">
                                    <span>
                                    {Payment.id}
                                    </span>
                                </a>
                            </td>
                            <td class="tb-tnx-info">
                                <div class="tb-tnx-desc">
                                    <span class="title">
                                    {Payment.billFor}
                                    </span>
                                </div>
                                <div class="tb-tnx-date">
                                    <span class="date">
                                    {Payment.issueDate}
                                    </span>
                                    <span class="date">
                                    {Payment.dueDate}
                                    </span>
                                </div>
                            </td>
                            <td class="tb-tnx-amount">
                                <div class="tb-tnx-total">
                                    <span class="amount">
                                    {Payment.total}
                                    </span>
                                </div>
                                <div class="tb-tnx-status">
                                    <span class={`badge badge-dot badge-${Payment.icon}`}>
                                    {Payment.status}
                                    </span>
                                </div>
                            </td>
                        </tr>
    )
})


class PaymentHistoryTable extends React.Component {

    render(){
        return (
                <table class="table table-tranx">
                    <thead>
                        <tr class="tb-tnx-head">
                            <th class="tb-tnx-id">
                                <span class="">
                                    #
                                </span>
                            </th>
                            <th class="tb-tnx-info">
                                <span class="tb-tnx-desc d-none d-sm-inline-block">
                                    <span>Bill For</span>
                                </span>
                                <span class="tb-tnx-date d-md-inline-block d-none">
                                    <span class="d-md-none">
                                    Date
                                    </span>
                                    <span class="d-none d-md-block">
                                        <span>
                                        Issue Date
                                        </span>
                                        <span>
                                        Due Date
                                        </span>
                                    </span>
                                </span>
                            </th>
                            <th class="tb-tnx-amount">
                                <span class="tb-tnx-total">
                                Total
                                </span>
                                <span class="tb-tnx-status d-none d-md-inline-block">
                                Status
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {PaymentRow}
                    </tbody>
                </table>
        )
    }
}
    

export default PaymentHistoryTable



