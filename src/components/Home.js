import React from 'react';
import nikeRed from '../images/nike-red.jpg';
import nikeGreen from '../images/nike-green.jpg';

import { Card,CardMedia,CardActionArea,Typography,CardContent } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const text=["Men","Women"];
    const links=['/men-shoes','/women-shoes'];
    const img=[nikeRed,nikeGreen];

    return (
        <div className="home">
            <div className="home-inner">
            {text.map((text,index)=>(
            <Card key={index} className="card">
                <NavLink to={links[index]}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        class="card-image"
                        height="250"
                        width='200'
                        alt={text}
                        image={img[index]}
                        />
                        <CardContent class="card-content">
                            <Typography gutterBottom variant="h6" component="h2" className="font" style={{textAlign:"center"}}>
                                {text}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                 </NavLink>
             </Card>
            ))}
            </div>
        </div>
    )
}

export default Home
