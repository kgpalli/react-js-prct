import React, { Component } from 'react'

 class Toggle1 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isToggledOn:true  
        }
      //  this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {

        this.setState(state => ({
            isToggledOn: !state.isToggledOn
        }));

    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggledOn ? 'ON': 'OFF'}</button>
            </div>
        )
    }
}

export default Toggle1
