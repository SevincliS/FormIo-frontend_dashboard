import React from 'react';


class ContentHeading extends React.Component {

    render(){
        return (
                <div class="nk-block-head-content">
                    <div class="nk-block-head-sub">
                        <span>
                            {this.props.subtitle}
                        </span>
                    </div>
                    <h2 class="nk-block-title fw-normal">
                            {this.props.title}
                    </h2>
                    <div class="nk-block-des">
                        <p>
                            {this.props.desc}
                            <span class="text-primary">
                                <em class="icon ni ni-info">
                                </em>
                            </span>
                        </p>
                    </div>
                </div>
        )
    }
}
    

export default ContentHeading



