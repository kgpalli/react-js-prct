import React, { Component } from 'react'





 
  class Welcome_c extends Component {
   

    constructor(props) {
        super(props)
    
        this.state = {
             date : new Date()
        }
    }

    componentDidMount(){
     this.timerId = setInterval(
         () => this.tick,
         1000
     )


    }

    componentDidUnMount(){
        clearInterval(this.timerId)

    }

     tick(){
         this.setState({
             date : new Date()
         })
     }
    
     render() {
         return (
             <div>
             <h1>California Local time</h1>
             <h2>{this.state.date.toLocaleString()} </h2>
             </div>
         )
     }
 }
 
 export default Welcome_c
 