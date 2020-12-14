import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/css/index.scss';
import  { Login, Register } from './containers'
import '../src/assets/theme-assets/css/dashlite.css'
import '../src/assets/theme-assets/css/theme.css'



class Index extends React.Component {
  render() {
    return (
      
      <Register/>
    )
  }
}





ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);

