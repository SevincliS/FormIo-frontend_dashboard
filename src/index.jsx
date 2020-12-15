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
} from './containers'
import '../src/assets/theme-assets/css/dashlite.css'
import '../src/assets/theme-assets/css/theme.css'



class Index extends React.Component {
  render() {
    return (
      <MySubscription/>
    )
  }
}





ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);

