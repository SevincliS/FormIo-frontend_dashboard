import React from 'react';
import {Link} from 'react-router-dom'

const Invoices = [
    {
        "id": "746F5K2",
        "date": "23 Jan 2019, 10:45pm",
        "amount": "2300.00",
        "status": "Complete",
        "link" : "/invoice-detail",
        "printLink":"/invoice-print",
    },
    {
        "id": "546H74W",
        "date": "12 Jan 2020, 10:45pm",
        "amount": "120.00",
        "status": "Pending",
        "link" : "/invoice-detail",
        "printLink":"/invoice-print",
    },
    {
        "id": "87X6A44",
        "date": "26 Dec 2019, 12:15 pm",
        "amount": "560.00",
        "status": "Complete",
        "link" : "/invoice-detail",
        "printLink":"/invoice-print",
    },
    {
        "id": "986G531",
        "date": "21 Jan 2019, 6 :12 am",
        "amount": "3654.00",
        "status": "Cancelled",
        "link" : "/invoice-detail",
        "printLink":"/invoice-print",
    },
    {
        "id": "326T4M9",
        "date": "21 Jan 2019, 6 :12 am",
        "amount": "200.00",
        "status": "Complete",
        "link" : "/invoice-detail",
        "printLink":"/invoice-print",
    },
    {
        "id": "746F5K2",
        "date": "23 Jan 2019, 10:45pm",
        "amount": "2300.00",
        "status": "Complete",
        "link" : "/invoice-detail",
        "printLink":"/invoice-print",
    },
    {
        "id": "546H74W",
        "date": "12 Jan 2020, 10:45pm",
        "amount": "120.00",
        "status": "Pending",
        "link" : "/invoice-detail",
        "printLink":"/invoice-print",
    },
    {
        "id": "87X6A44",
        "date": "26 Dec 2019, 12:15 pm",
        "amount": "560.00",
        "status": "Complete",
        "link" : "/invoice-detail",
        "printLink":"/invoice-print",
    },
]


const InvoicesRow = Invoices.map((invoice) => {
    return (
        <tr class="tb-odr-item">
            <td class="tb-odr-info">
                <Link to={invoice.link}>
                     <span class="tb-odr-id"><a href="">#{invoice.id}</a></span>
                <span class="tb-odr-date">{invoice.date}</span>
                </Link>
            </td>
            <td class="tb-odr-amount">
                <span class="tb-odr-total">
                    <span class="amount">${invoice.amount}</span>
                </span>
                <span class="tb-odr-status">
                    <span class={`badge badge-dot ${invoice.status === "Complete" ? `badge-success` : invoice.status === "Pending" ? `badge-warning` : `badge-danger`}`}>{invoice.status}</span>
                </span>
            </td>
            <td class="tb-odr-action">
                <div class="tb-odr-btns d-none d-sm-inline">
                    <Link to={invoice.printLink}>
                    <a href="" target="_blank" class="btn btn-icon btn-white btn-dim btn-sm btn-primary"><em class="icon ni ni-printer-fill"></em></a>
                    </Link>
                    <Link to={invoice.link}>
                    <a href="" class="btn btn-dim btn-sm btn-primary">View</a>
                    </Link>
                </div>
                <a href="" class="btn btn-pd-auto d-sm-none"><em class="icon ni ni-chevron-right"></em></a>
            </td>
        </tr>
    )

})
  
     

class InvoiceTable extends React.Component {

    render(){
        return (
            <table class="table table-orders">
            <thead class="tb-odr-head">
                <tr class="tb-odr-item">
                    <th class="tb-odr-info">
                        <span class="tb-odr-id">Order ID</span>
                        <span class="tb-odr-date d-none d-md-inline-block">Date</span>
                    </th>
                    <th class="tb-odr-amount">
                        <span class="tb-odr-total">Amount</span>
                        <span class="tb-odr-status d-none d-md-inline-block">Status</span>
                    </th>
                    <th class="tb-odr-action">&nbsp;</th>
                </tr>
            </thead>
            <tbody class="tb-odr-body">
                    {InvoicesRow}
            </tbody>
        </table>       
    
    
        )
    }
}
    

export default InvoiceTable



