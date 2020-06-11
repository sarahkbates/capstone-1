import React from 'react';
import {Link} from 'react-router-dom';
import items from '../items.json';




export default function Items(props) {
  

  const buy = (item, i) =>{
   
    //END RESULT: move the item to the shopping cart
    //update current item stock
    
    // const purchasedItem = {items, quantity : 1}

    // props.setShoppingCart([props.shoppingCart, purchasedItem]);

    // const updatedItem = {items, stock: items.stock - 1};

    // const itemsCopy = [items] //imutability
    // itemsCopy.splice(1,updatedItem);

    // props.setItems(itemsCopy);

props.setShoppingCart(props.shoppingCart.concat(item));
console.log("shopping cart after concat", props.shoppingCart);
console.log(item);

    




  
  }



return(
  <div className = 'products'>
    {items.map( (item, i) => {
    return (
      <div className='product-card' key={item.id} >
        <img src={process.env.PUBLIC_URL + item.img} alt={item.imgAlt} className='product-img' />
        <div className='product-info'>
          <p>{item.name}</p>
          <p>${item.price}</p>
          <p> Stock: {item.stock}</p>
          <button onClick ={() => buy(item, i)} className='cart-btn' >Add to Cart</button>
        </div>
      </div>
    )
    })}
  </div>
);
}
