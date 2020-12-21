import React from 'react';


class PricingCard extends React.Component {

    render(){
        return (
            <div class="col-md-4">
            <div class="price-plan card card-bordered text-center">
                <div class="card-inner">
                    <div class="price-plan-media">
                        <img src={this.props.icon} alt=""/>
                    </div>
                    <div class="price-plan-info">
                        <h5 class="title">{this.props.title}</h5>
                        <span>{this.props.desc}</span>
                    </div>
                    <div class="price-plan-amount">
                        <div class="amount">${this.props.price} <span>{this.props.freq}</span></div>
                        <span class="bill">{this.props.info}</span>
                    </div>
                    <div class="price-plan-action">
                        <a href="#" class="btn btn-primary">Select Plan</a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
    

export default PricingCard



