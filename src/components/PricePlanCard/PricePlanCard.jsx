import React from 'react';
import {NavLink} from 'react-router-dom'

class PricePlanCard extends React.Component {

    render(){
        return (
            <div class="card card-bordered">
                <div class="card-inner-group">
                    <div class="card-inner">
                        <div class="between-center flex-wrap flex-md-nowrap g-3">
                            <div class="nk-block-text">
                                <h6>
                                    {this.props.title} - 
                                    <span class="text-base">
                                        {this.props.price} / {this.props.frequency}
                                    </span>
                                </h6>
                                <p class="text-soft">
                                    {this.props.text}
                                </p>
                            </div>
                            <div class="nk-block-actions flex-shrink-0">
                                <NavLink to="/pricing" className="btn btn-primary">
                                    View Plan
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div class="card-inner">
                        <div class="between-center flex-wrap flex-md-nowrap g-3">
                            <div class="nk-block-text">
                                <p>Learn more about our 
                                    <a href="#">
                                        subscription options
                                    </a>
                                    .
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
    

export default PricePlanCard



