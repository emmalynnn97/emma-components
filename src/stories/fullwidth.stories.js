import React from 'react'
import FullWidth from '../FullWidth'
import Overlay from '../Overlay'
export default {
    title:'Full Width',
    component:FullWidth
};

export const fullwidth = ()=><FullWidth height='25vw' content={
<>
<Overlay content={<>
</>} bgColor='rgba(0,0,80,.4)'/>
</>
}/>