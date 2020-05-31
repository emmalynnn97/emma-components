import React, { Component } from 'react'
export class Card extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             image:this.props.image,
             content:this.props.content,
             bgColor:this.props.bgColor,
             texture:this.props.texture
        }
    }
    
    render() {
        const cardStyle={
            height:'45vw',
            width:'35%',
            boxShadow:`0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12)`,
            margin:'0 1vw',
            maxHeight:'550px',
        }
        const cardHeaderStyle={
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage:`url("${this.state.image}")`,
            width:'100%',
            height:'50%'
        }
        const cardContentStyle={
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-evenly',
            textAlign:'center',
            padding:'0px 15px',
            lineHeight:'1.5',
            height:'50%',
            backgroundColor:this.state.bgColor,
            backgroundImage:`url("${this.state.texture}")`,
        }
        return (
            <div style={cardStyle}>
                <div style={cardHeaderStyle}></div>
                <div style={cardContentStyle}>
                {this.state.content}
                </div>
            </div>
        )
    }
}

export default Card
