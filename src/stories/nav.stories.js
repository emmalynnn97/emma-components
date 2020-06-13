import React from 'react'
import Nav from '../Nav'

export default {
    title:'Nav',
    component:Nav
}
const links = [
    'Link 1',
    'Link 2',
    'Link 3',
    'Link 4',
]
export const fixedNavBar = ()=>
<>
<Nav height='100px' links={links} bgColor='salmon'/>
<div style={{height:'200vh'}}></div>
    </>