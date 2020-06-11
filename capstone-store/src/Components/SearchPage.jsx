import React from 'react';
import {Link} from 'react-router-dom';
import data from '../items.json';

export default function SearchPage({searchInput}) {

    const results = data.filter( data => data.name.toLowerCase().includes(searchInput.toLowerCase()));
    console.log({searchInput});
    const searchData = results.map( (data) => {
        return (
            <div className='product-card' key={data.id} >
                <img src={process.env.PUBLIC_URL + data.img} alt={data.imgAlt} className='product-img' />
                <div className='product-info'>
                    <p>{data.name}</p>
                    <p className='category'>{data.category}</p>
                    <p>${data.price}</p>
                </div>
                <button className='cart-btn' >Add to Cart</button>
            </div>
        )
    })
    console.log("searchData:" , searchData);
    return (
        <div className='products' >
            {searchData}
        </div>
       
    )
}