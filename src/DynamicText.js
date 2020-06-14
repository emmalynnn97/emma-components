import React, { Component } from 'react'

export class DynamicText extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:this.props.content
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            if(window.pageYOffset < 50){
                this.setState({
                    content:this.props.content
                })
            }
            if(window.pageYOffset > 50){
                this.setState({
                    content:<>
                    <div style={{
                        marginLeft:'7vw',
                        lineHeight:'1.5'
                    }}>
                    <h1>Hi, my name is Emma Lynn<br/>I develop and design user experiences &#9834;</h1>
                    </div>
                    </>
                })
            }
            if(window.pageYOffset > 150){
                this.setState({
                    content:<>
                    <div style={{
                        marginLeft:'7vw',
                        lineHeight:'1.5'
                    }}>
                    <h1>Hi, my name is Emma Lynn<br/>I develop and design single page applications</h1>
                    </div>
                    </>
                })
            }
            if(window.pageYOffset > 200){
                this.setState({
                    content:<>
                    <div style={{
                        marginLeft:'7vw',
                        lineHeight:'1.5'
                    }}>
                    <h1>Hi, my name is Emma Lynn<br/>I develop and design digital tools &#9874;</h1>
                    </div>
                    </>
                })
            }
        })
    }
    componentWillUnmount(){
        window.removeEventListener('scroll')
    }
    render() {
        return (
            <div>
               {this.state.content} 
            </div>
        )
    }
}

export default DynamicText
