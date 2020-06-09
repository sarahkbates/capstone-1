import React from 'react';
import data from '../item-data.json';

const updateData = data.map( (data) => {
    return (
      <div className='product-card' key={data.id} >
        <img src={process.env.PUBLIC_URL + data.img} alt={data.imgAlt} className='product-img' />
        <div className='product-info'>
          <p>{data.name}</p>
          <p>${data.price}</p>
          <p> Stock: {data.stock}</p>
          <button className='cart-btn' >Add to Cart</button>
        </div>
      </div>
    )
  });


export default updateData;