import React from 'react';

class TicketMessage extends React.Component {

    render(){
        return (
          
            <div class="ticket-msg-item">
            <div class="ticket-msg-from">
                <div class="ticket-msg-user user-card">
                    <div class={`user-avatar ${this.props.role === "Customer" ? `bg-primary`: `bg-warning` }`}>
                        <span>{this.props.shortName}</span>
                    </div>
                    <div class="user-info">
                        <span class="lead-text">{this.props.name}</span>
                        <span class="text-soft">{this.props.role}</span>
                    </div>
                </div>
                <div class="ticket-msg-date">
                    <span class="sub-text">{this.props.date}</span>
                </div>
            </div>
            <div class="ticket-msg-comment">
               <p>{this.props.message}</p>
            </div>
            <div class="ticket-msg-attach">
                <h6 class="title">Attachment</h6>
                <ul class="ticket-msg-attach-list">
                    <li>
                        <a href="#">
                            <img src={this.props.attachment} alt=""/>
                            <em class="icon ni ni-download"></em>
                        </a>
                    </li>
        
                </ul>
            </div>
        </div>
       
        )
    }
}
    

export default TicketMessage



