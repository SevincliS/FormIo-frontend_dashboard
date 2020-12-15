import React from 'react';


class ContentWrapper extends React.Component {
    render(){
        return(
            <div className="nk-content">
                <div className="container wide-xl">
                    <div className="nk-content-inner"> 
                            {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
 

export default ContentWrapper