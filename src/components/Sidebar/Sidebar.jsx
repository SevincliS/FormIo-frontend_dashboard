import React from 'react';
import {Menu} from '../'

class Sidebar extends React.Component {

    render(){
        return (
            <div className="nk-aside" data-content="sideNav" data-toggle-overlay="true" data-toggle-screen="lg" data-toggle-body="true">
                <div class="nk-sidebar-menu" data-simplebar>
                    <Menu/>
                </div>
                <div class="nk-aside-close">
                    <a href="#" class="toggle" data-target="sideNav"><em class="icon ni ni-cross"></em></a>
                </div>
            </div>
            
            
        )
    }
}
    

export default Sidebar


