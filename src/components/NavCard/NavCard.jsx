import React from 'react';


class NavCard extends React.Component {

    render(){
        return (
                <div class="card card-bordered card-full">
                    <div class="nk-wg1">
                        <div class="nk-wg1-block">
                            <div class="nk-wg1-img">
                                {this.props.icon}
                            </div>
                            <div class="nk-wg1-text">
                                <h5 class="title">
                                    {this.props.title}
                                </h5>
                                <p>
                                    {this.props.desc}
                                </p>
                            </div>
                        </div>
                        <div class="nk-wg1-action">
                                <a href="profile.html" class="link">
                                    <span>
                                        {this.props.navtitle}
                                    </span> 
                                    <em class="icon ni ni-chevron-right"></em>
                                </a>
                        </div>
                    </div>
                </div>
        )
    }
}
    

export default NavCard



