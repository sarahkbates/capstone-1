import React, {useState} from 'react';
import items from '../items.json';

export default function ShoppingCart(props) {

React.useEffect(()=>{
    console.log("shopping cart /shoppingCart", props.shoppingCart);
})     


    return(
        <div>
           {props.shoppingCart.map((item,i) => {
               return(
                <div className = 'ShoppingCart'>
                    <ul>{item.name}
                    <li>${item.price}</li>

                    </ul>
                </div>
               )
           })}
            </div>
    )
}