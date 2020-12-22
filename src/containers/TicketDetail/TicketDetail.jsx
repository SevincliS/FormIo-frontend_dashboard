import React from 'react';

import {
    BodyWrapper,
    ContentWrapper,
    ContentBody,
    Block,
} from '../index'

import {
    Header, 
    Sidebar, 
    ContentHeading,
    TicketMessage,
    Editor,
} from '../../components'
import HeadWrapper from '../Wrapper/HeadWrapper';
import {Link} from 'react-router-dom'




class TicketDetail extends React.Component {

    render(){
        return (
            <BodyWrapper>
                    <Header/>
                        <ContentWrapper>
                            <Sidebar/>  
                             <ContentBody>
                             <HeadWrapper>
                                <ContentHeading 
                                title={"Request for approve payment"} 
                                subtitle={
                                <Link to="/tickets">
                                    <a class="back-to" href=""><em class="icon ni ni-arrow-left"></em><span>My Tickets</span></a>
                                </Link>
                            }  
                                        />
                                </HeadWrapper>
                                <Block>
                                    <div class="ticket-info">
                                            <ul class="ticket-meta">
                                                <li class="ticket-id"><span>Ticket ID:</span> <strong>7565</strong></li>
                                                <li class="ticket-date"><span>Submitted:</span> <strong>26 Jan 2020</strong></li>
                                            </ul>
                                            <div class="ticket-status">
                                                <span class="badge badge-success">Open</span>
                                            </div>
                                        </div>
                                    </Block>
                                    <Block>
                                    <div class="card card-bordered">
                                        <div class="card-inner">
                                            <div class="ticket-msgs">
                                                <TicketMessage
                                                role="Customer"
                                                name="Kenneth Anderson"
                                                shortName="KA"
                                                message="Hello Sir,
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                Best Regerds Kenneth Anderson"
                                                date="Jan 26, 2020 6:00 AM"
                                                />
                                                 <TicketMessage
                                                role="Support Team"
                                                name="Barış Biber"
                                                shortName="KA"
                                                message="Hello Kenneth,
                                                Thanks for contact us with your issues. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                                                />
                                                <Editor/>
                                            </div>
                                        </div>
                                    </div>
                                    </Block>
                                    
                    </ContentBody>
            </ContentWrapper>
        </BodyWrapper>
        )
    }
}
    

export default TicketDetail


