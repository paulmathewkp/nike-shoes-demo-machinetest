import { Card,CardContent, Typography,CardActionArea,CardMedia, Button,IconButton } from '@material-ui/core';
import { DeleteForeverRounded } from '@material-ui/icons';
import React, { useContext } from 'react';
import '../app1.scss';
import { ShoesContext } from '../context/ShoesContext';

const Cart = () => {
    const {cartItems,setCartItems,setBadgeValue,badgeValue,totalPrice}=useContext(ShoesContext);

    const deleteCart=(id)=>{
         const newItems= cartItems.filter((items)=>items.id!==id);
         setCartItems(newItems);
         setBadgeValue(prevValue=>--prevValue)
    }
    console.log('cartItems', cartItems);
    return (
        <div className="cart-container">
            <Typography className="font" variant="h4" style={{marginTop:"20px"}} align="center" gutterBottom>My Cart</Typography>
            <div className="cart-section">
                <div className="cart-history">
                    {cartItems !== undefined? cartItems?.map((item,index)=>(
                    <Card className="cart-history-flex" key={index}>
                        <CardActionArea className="card-action">
                        <CardMedia
                            component="img"
                            height="200"
                            alt={item.name}
                            image={item.img}
                        />
                        </CardActionArea>
                        <CardContent className="flexing">
                            <div className="flex1">
                                <Typography variant="body2" className="font">{item.name}</Typography>
                                <IconButton color="secondary" onClick={(e)=>deleteCart(item.id)}>
                                    <DeleteForeverRounded fontSize="small"/>
                                </IconButton>                            
                            </div>
                            <div className="flex1">
                                <Typography  variant="body2" className="font">{item.price}</Typography>
                                <Typography variant="body2" className="font">QTY:{cartItems.length}</Typography>
                            </div>
                        </CardContent>
                    </Card>
                    )):<Typography className="font" variant="h6" color="secondary">Cart is empty</Typography>
                }
                </div>
                <div className="cart-summery">
                    <Card>
                        <CardContent>
                            <Typography className="font" variant="h5" gutterBottom>Order summary</Typography>
                            <div className="flex1">
                                <Typography gutterBottom variant="body2" className="font" >{badgeValue} Items</Typography>
                                <Typography gutterBottom variant="body2" className="font" >{totalPrice}</Typography>
                            </div>
                            <div className="flex1">
                                <Typography gutterBottom  variant="body2" className="font">Delivery</Typography>
                                <Typography gutterBottom  variant="body2" className="font">Free</Typography>
                            </div>
                            <div className="flex1">
                                <Typography gutterBottom variant="body2" className="font">Total</Typography>
                                <Typography gutterBottom  variant="body2" className="font">{totalPrice}</Typography>
                            </div>
                            <Button
                                style={{marginTop:"30px",width:"100%"}}
                                size="small"
                                className="font"
                                variant="outlined"
                                color="secondary"
                                onClick={(e)=>{
                                setCartItems();
                                setBadgeValue(0)}}
                            >
                                CHECKOUT
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Cart