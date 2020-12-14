import React from 'react';


class FormHeading extends React.Component {

    render(){
        return (
            <div class="nk-block-head">
                <div class="nk-block-head-content">
                    <h5 class="nk-block-title">{this.props.title}</h5>
                    <div class="nk-block-des">
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}
    

export default FormHeading



