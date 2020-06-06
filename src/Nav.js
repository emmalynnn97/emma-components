import React, { Component } from 'react'

export class Nav extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             bgColor:this.props.bgColor,
             links:this.props.links,
        }
    }
    
    render() {
        const navStyle={
            height:'100px',
            width:'100%',
            background:this.state.bgColor,
            boxShadow:`0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12)`,
            maxHeight:'125px',
            minHeight:'50px',
            position:'fixed',
            left:'0',
            top:'0',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            zIndex:'2',
        }
        const navLinkStyle={
            margin:'0 1vw',
            cursor:'pointer',
            width:'75px',
            height:'30px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center',
            color:'white',
            fontSize:'20px',
            fontWeight:'600',
            letterSpacing:'1.25px'
        }
        return (
            <div style={navStyle}>
        {
        this.state.links.map( link => <div style={navLinkStyle}>{link}</div> )
        }
            </div>
            
          
        )
    }
}

export default Nav
