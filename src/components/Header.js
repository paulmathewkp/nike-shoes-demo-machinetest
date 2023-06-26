import React,{useContext} from 'react';
import { IconButton,Badge, Card } from '@material-ui/core';
import {  ShoppingCart } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import '../app1.scss';
import FontIcons from './FontIcons';
import { ShoesContext } from '../context/ShoesContext';

const Header = () => {
    const {badgeValue}=useContext(ShoesContext);
    const links=["/","/men-shoes","/women-shoes","/kids-shoes"];

    return (
        <Card className="header">
                <NavLink to="/">
                    <div className="nike-logo-sizing">
                <svg aria-hidden="true" class="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
                </div></NavLink>
            <div  className="nav">
                {
                    ["HOME","MEN","WOMEN","KIDS"].map((text,index)=>(
                    <NavLink to={links[index]} key={index} activeClassName="active" end>
                        <FontIcons loc={index}/>
                        <div className='nav-align'><h3>{text}</h3></div>
                    </NavLink>
                    ))
                }
            </div>
            <div className="cart">
                <NavLink to="/cart"> 
                    <IconButton color="inherit">
                        <Badge badgeContent={badgeValue} color="secondary">
                            <ShoppingCart fontSize="medium"/>
                        </Badge>
                    </IconButton>
                </NavLink>
            </div>
        </Card>
    )
}

export default Header
