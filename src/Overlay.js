import React, { Component } from 'react'
export class Overlay extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:this.props.content,
             bgColor:this.props.bgColor
        }
    }
    
    render() {
        const overlayStyle = {
            position:'relative',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'100%',
            width:'100%',
            backgroundColor:this.state.bgColor
        }
        return (
            <div style={overlayStyle}>
                {this.state.content}
            </div>
        )
    }
}

export default Overlay
