import React from 'react';


class BodyWrapper extends React.Component {
    render(){
        return(
            <div className="nk-body bg-white npc-subscription has-aside">
                <div className="nk-app-root">
                    <div className="nk-main">
                        <div className="nk-wrap">  
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 

export default BodyWrapper