import React from 'react';
import { Footer } from '../../components'

class ContentBody extends React.Component {
    render(){
        return(
            <div className="nk-content-body">
                <div className="nk-content-wrap">
                            {this.props.children}
                </div> 
                <Footer/>
            </div>
        )
    }
}
 

export default ContentBody