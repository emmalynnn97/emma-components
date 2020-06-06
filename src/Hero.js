import React, { Component } from 'react'
import Overlay from './Overlay'
export class Hero extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             image:this.props.image,
             parallax:this.props.parallax,
             height:this.props.height
        }
    }
    
    render() {
        var heroStyle;
        if(this.state.parallax){
            heroStyle = {
                height:this.state.height,
                maxHeight:'750px',
                minHeight:'250px',
                backgroundSize:'cover',
                backgroundImage:`url("${this.state.image}")`,
                backgroundAttachment:'fixed',
                marginTop:'90px'
            }
        }
        else{
            heroStyle = {
                height:this.state.height,
                maxHeight:'750px',
                minHeight:'250px',
                backgroundSize:'cover',
                backgroundImage:`url("${this.state.image}")`,
                backgroundPosition:'center',
                marginTop:'90px'
            }
        }
         
        return (
            <div style={heroStyle}>
                <Overlay bgColor='rgba(0,0,80,.4)'/>
            </div>
        )
    }
}

export default Hero
