import React from 'react';


const Tickets = [
    {
        "id": "C506223",
        "subject": "Request for approve payment",
        "date": "26 Jan 2020",
        "lastSeen": "27 Jan 2020 10:20am",
        "status": "Open",
        "isUnread": true,
        "lastSeenTrack" : "Support Team" 
    },
    {
        "id": "C503095",
        "subject": "Payment was rejected",
        "date": "02 Dec 2019",
        "lastSeen": "04 Dec 2019 04:45pm",
        "status": "Close",
        "isUnread": false,
        "lastSeenTrack" : "User" 
    },
    {
        "id": "C502049",
        "subject": "We cannot install on our server",
        "date": "02 Nov 2019",
        "lastSeen": "04 Nov 2019 04:45pm",
        "status": "Open",
        "isUnread": false,
        "lastSeenTrack" : "User" 
    },
    {
        "id": "C502035",
        "subject": "Support for website",
        "date": "17 Oct 2019",
        "lastSeen": "21 Oct 2019 04:45pm",
        "status": "Close",
        "isUnread": false,
        "lastSeenTrack" : "Support Team" 
    },
    {
        "id": "C501783",
        "subject": "We cannot install on our server",
        "date": "02 Oct 2019",
        "lastSeen": "07 Feb 2020 02:28pm",
        "status": "Open",
        "isUnread": true,
        "lastSeenTrack" : "User" 
    },
    {
        "id": "C501624",
        "subject": "Setup Local Payment Gateway",
        "date": "01 Oct 2019",
        "lastSeen": "04 Oct 2019 04:15pm",
        "status": "Open",
        "isUnread": false,
        "lastSeenTrack" : "Technical Team" 
    },
    {
        "id": "C501605",
        "subject": "Unable to set automated email response",
        "date": "24 Sep 2019",
        "lastSeen": "01 Oct 2019 02:29am",
        "status": "Close",
        "isUnread": false,
        "lastSeenTrack" : "Support Team"  
    },
    {
        "id": "C501579",
        "subject": "Setup Local Payment Gateway",
        "date": "17 Sep 2019",
        "lastSeen": "29 Sep 2019 06:17am",
        "status": "Close",
        "isUnread": false,
        "lastSeenTrack" : "Technical Team" 
    },

]


const TicketsRow = Tickets.map((ticket) => {
    return (
        <tr class={`tb-ticket-item ${ticket.isUnread ? `is-unread` : null}`}>
        <td class="tb-ticket-id"><a href="ticket-details.html">{ticket.id}</a></td>
        <td class="tb-ticket-desc">
            <a href="html/subscription/ticket-details.html"><span class="title">{ticket.subject}</span></a>
        </td>
        <td class="tb-ticket-date tb-col-md">
            <span class="date">{ticket.date}</span>
        </td>
        <td class="tb-ticket-seen tb-col-md">
            <span class="date-last"><em class={`icon-avatar ${ticket.lastSeenTrack === "Support Team" ? "bg-danger-dim" : ticket.lastSeenTrack === "Technical Team" ? "bg-warning-dim" : null } icon ni ni-user-fill nk-tooltip`} title={ticket.lastSeenTrack}></em> {ticket.lastSeen}<span class="d-none d-xl-inline">10:20am</span></span>
        </td>
        <td class="tb-ticket-status">
            <span class={`badge ${ticket.status === "Open" ? `badge-success` : `badge-light`}`}>{ticket.status}</span>
        </td>
        <td class="tb-ticket-action">
            <a href="html/subscription/ticket-details.html" class="btn btn-icon btn-trigger">
                <em class="icon ni ni-chevron-right"></em>
            </a>
        </td>
    </tr>
    )

})
  
     

class TicketTable extends React.Component {

    render(){
        return (
            <table class="table table-tickets">
            <thead class="tb-ticket-head">
                <tr class="tb-ticket-title">
                    <th class="tb-ticket-id"><span>Ticket</span></th>
                    <th class="tb-ticket-desc">
                        <span>Subject</span>
                    </th>
                    <th class="tb-ticket-date tb-col-md">
                        <span>Submited</span>
                    </th>
                    <th class="tb-ticket-seen tb-col-md">
                        <span>Last Seen</span>
                    </th>
                    <th class="tb-ticket-status">
                        <span>Status</span>
                    </th>
                    <th class="tb-ticket-action"> &nbsp; </th>
                </tr>
            </thead>
            <tbody class="tb-ticket-body">
           
            {TicketsRow}
            
                
            </tbody>
        </table>     
    
    
        )
    }
}
    

export default TicketTable



