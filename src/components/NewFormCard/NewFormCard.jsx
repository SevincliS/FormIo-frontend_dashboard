import React from 'react';
import {Link} from 'react-router-dom'

class NewFormCard extends React.Component {

    render(){
        return (
            <div class="col-sm-6 col-xl-4">
            <div class="card">
                <div class="card-inner">
                    <div class="team">
                        <div class="user-card user-card-s2">
                            <div class="user-info">
                                <Link to="/create-form">
                                <a class="btn btn-lg btn-outline-primary">+</a>
                                </Link>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
    

export default NewFormCard



