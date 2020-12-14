import React from 'react';


class Button extends React.Component {

    render(){
        return (
            <div class="form-group">
              <button class="btn btn-lg btn-primary btn-block">{this.props.name}</button>
             </div>
        )
    }
}
    

export default Button