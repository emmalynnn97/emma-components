import React, { Component } from 'react'

export class Footer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:this.props.content,
             bgColor:this.props.bgColor
        }
    }
    
    render() {
        const footerStyle={
            width:'100%',
            height:'100px',
            background:this.state.bgColor,
            position:'relative',
            bottom:'0',
            left:'0',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            zIndex:'2'
        }
        const contentStyle={
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            minWidth:'275px',
            width:'50%',
            color:'white',
            height:'50px'
        }
        return (
            <div style={footerStyle}>
                <div style={contentStyle}>{this.state.content}</div>
            </div>
        )
    }
}

export default Footer
