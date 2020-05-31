import React from 'react'
import FullWidth from '../FullWidth'
export default {
    title:'Full Width',
    component:FullWidth
};

export const fullwidth = ()=><FullWidth content={<>
<div>
    <h2 style={{color:'white'}}>
        Join Our Newsletter
    </h2>
    <hr style={{
borderTop:'2px solid white',
width:'100%'
}}/>
    <input style={{
        background:'rgba(0,0,0,0)',
        color:'white',
        border:'2px solid white',
        width:'100%',
        padding:'5px'
        }} type="email" name="email" value='Email Address' placeholder="Email Address"/>
</div>
</>} bgColor='linear-gradient(90deg, rgb(230,100,150), rgb(225,175,0))' height='20vw' />