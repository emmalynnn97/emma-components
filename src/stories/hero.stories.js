import React from 'react';
import Hero from '../Hero'

export default {
  title: 'Hero',
  component: Hero,
};

export const hero = ()=>
<Hero height='35vw' parallax={false} image='https://cosmic-s3.imgix.net/d13cbe90-a2b9-11ea-925c-2bec73dc3cb5-austin-distel-wawEfYdpkag-unsplash.jpg'
/>
export const heroParallax = ()=><>
<Hero height='35vw' parallax={true} image='https://cosmic-s3.imgix.net/d13cbe90-a2b9-11ea-925c-2bec73dc3cb5-austin-distel-wawEfYdpkag-unsplash.jpg'/>
<div style={{background:'linear-gradient(35deg,indigo,violet)',height:'20vh'}}></div>
<Hero height='35vw' parallax={true} image='https://cosmic-s3.imgix.net/d13cbe90-a2b9-11ea-925c-2bec73dc3cb5-austin-distel-wawEfYdpkag-unsplash.jpg'/>
</>

