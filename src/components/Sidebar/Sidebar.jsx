import React from 'react';
import {Menu} from '../'
import {useSelector} from 'react-redux'
import {menuActive} from '../../redux/actions'

const Sidebar = () => {
const toggleMenu = useSelector(state => state.toggleMenu)
        return (
            <div className={`nk-aside  ${ toggleMenu ?  `content-active` : null}`} data-content="sideNav" data-toggle-overlay="true" data-toggle-screen="lg" data-toggle-body="true">
                <div class="nk-sidebar-menu" data-simplebar>
                    <Menu/>
                </div>
                <div class="nk-aside-close">
                    <a href="#" class="toggle" data-target="sideNav"><em class="icon ni ni-cross"></em></a>
                </div>
            </div>
            
            
        )
  
}
    

export default Sidebar


