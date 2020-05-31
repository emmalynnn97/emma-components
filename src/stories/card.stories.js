import React from 'react';
import Card from '../Card'
import Button from '../Button'
export default {
    title: 'Card',
    component: Card,
};

export const card = () => <Card content={
<>
<h2 style={{ margin: '0', color: 'rgb(0,0,115)' }}>Card Title</h2>
    <p style={{ margin: '0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Button shadow='0px 8px 15px rgba(0, 0, 0, 0.1)' color='#fff' bgColor='rgb(0,0,115)' />
    </>
    } image='https://cosmic-s3.imgix.net/1ab76020-a2bf-11ea-925c-2bec73dc3cb5-nikolay-tarashchenko-u76CN5rZeOU-unsplash.jpg' />

    export const card2 = ()=><Card texture='https://www.transparenttextures.com/patterns/grid-noise.png' bgColor='#E8E6E8' content={
        <>
        <h2 style={{ margin: '0', color: '' }}>Card Title</h2>
            <p style={{ margin: '0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button shadow='0px 8px 15px rgba(0, 0, 0, 0.1)' color='#fff' bgColor='rgb(230,100,150)' />
            </>
            } image='https://cosmic-s3.imgix.net/fda91550-a2d2-11ea-8370-b9ea0c50cbb0-jess-bailey-l3N9Q27zULw-unsplash.jpg'/>

