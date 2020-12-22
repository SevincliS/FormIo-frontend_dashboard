import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/css/index.scss';
import  { 
  Login, 
  Register,
  Dashboard, 
  MyForms,
  PaymentHistory,
  MySubscription,
  ManageTeam,
  Download,
  MyProfile,
  Pricing,
  SubscriptionDetail,
  Invoices,
  Tickets,
  TicketDetail,
  CreateForm,
  InvoiceDetail,
  InvoicePrint,
} from './containers'
import '../src/assets/theme-assets/css/dashlite.css'
import '../src/assets/theme-assets/css/theme.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'



class Index extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route exact path="/my-profile">
            <MyProfile
            subpage="Personal"
            />
          </Route>
          <Route exact path="/my-profile/billing">
            <MyProfile
            subpage="Billing"
            />
          </Route>
          <Route exact path="/my-profile/settings">
            <MyProfile
            subpage="Settings"
            />
          </Route>
          <Route exact path="/my-profile/notifications">
            <MyProfile
            subpage="Notification"
            />
          </Route>
          <Route exact path="/my-subscription">
            <MySubscription/>
          </Route>
          <Route exact path="/my-forms">
            <MyForms/>
          </Route>
          <Route exact path="/payment-history">
            <PaymentHistory/>
          </Route>
          <Route exact path="/manage-team">
            <ManageTeam/>
          </Route>
          <Route exact path="/download">
            <Download/>
          </Route>
          <Route exact path="/pricing">
            <Pricing/>
          </Route>
          <Route exact path="/invoices">
            <Invoices/>
          </Route>
          <Route exact path="/tickets">
            <Tickets/>
          </Route>
          <Route exact path="/subscription-detail">
            <SubscriptionDetail/>
          </Route>
          <Route exact path="/create-form">
            <CreateForm/>
          </Route>
          <Route exact path="/ticket-detail">
            <TicketDetail/>
          </Route>
          <Route exact path="/invoice-detail">
            <InvoiceDetail/>
          </Route>
          <Route exact path="/invoice-print">
            <InvoicePrint/>
          </Route>

          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>

        </Switch>
      </Router>
    )
  }
}





ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);

