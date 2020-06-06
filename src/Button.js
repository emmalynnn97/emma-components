import React, { Component } from 'react'

export class Button extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             bgColor:this.props.bgColor,
             color:this.props.color,
             shadow:this.props.shadow,
             transform:this.props.transform,
             content:this.props.content
        }
    }
    
    render() {
        const buttonStyle={
            height:'35px',
            width:'125px',
            padding:'0px 10px',
            fontWeight:'600',
            borderRadius:'25px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center',
            color:this.state.color,
            background:this.state.bgColor,
            border:`2px solid ${this.state.bgColor}`,
            boxShadow:this.state.shadow,
            transform:this.state.transform,
            transition:'.25s ease',
            cursor:'pointer'
        }
        return (
            <div
            onMouseEnter={()=>{
                this.setState({
                    bgColor:this.props.color,
                    color:this.props.bgColor,
                    shadow:'0px 15px 20px rgba(0, 0, 0, 0.4)',
                    transform:'translateY(-7px)'
                })
            }}
            onMouseLeave={()=>{
                this.setState({
                    bgColor:this.props.bgColor,
                    color:this.props.color,
                    shadow:this.props.shadow,
                    transform:'translateY(0px)'
                })
            }}
            style={buttonStyle}>
                {this.state.content}
            </div>
        )
    }
}

export default Button
