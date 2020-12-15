import React from 'react';
import { Footer } from '../../components'

class HeadWrapper extends React.Component {
    render(){
        return(
            <div class="nk-block-head nk-block-head-lg">
                <div class="nk-block-between-md g-4">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
 

export default HeadWrapper