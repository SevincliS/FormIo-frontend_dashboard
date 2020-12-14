import React from 'react';
import {Language} from '../index'


class SplitFooter extends React.Component {

    render(){
        return (
            <div class="nk-block nk-auth-footer">
                                <div class="nk-block-between">
                                    <ul class="nav nav-sm">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Terms & Condition</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Privacy Policy</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Help</a>
                                        </li>
                                        <Language/>
                                    </ul>
                                </div>
                                <div class="mt-3">
                                    <p>&copy; 2019 DashLite. All Rights Reserved.</p>
                                </div>
                            </div>
            
        )
    }
}
    

export default SplitFooter