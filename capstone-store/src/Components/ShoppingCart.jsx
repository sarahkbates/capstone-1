import React, {useState} from 'react';
import items from '../items.json';

export default function ShoppingCart(props) {

React.useEffect(()=>{
    console.log("shopping cart /shoppingCart", props.shoppingCart);
})     

const total = 0;

    return(
        <div className = "Checkout">
           {props.shoppingCart.map((item,i) => {
               return(
                <div>
                    <img src={process.env.PUBLIC_URL + item.img} alt={item.imgAlt} className='product-img'></img>
                    <ul>{item.name}
                    <li>${item.price}</li>

                    </ul>
                </div>
               )
           })}
            </div>
    )
}