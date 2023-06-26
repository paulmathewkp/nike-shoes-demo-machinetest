import React from 'react';
import '../app1.scss';
import Header from './Header';
import Section from './Section';

const Container = () => {
    return (
        <div className="container">
           <Header/> 
           <Section/>
        </div>
    )
}

export default Container
