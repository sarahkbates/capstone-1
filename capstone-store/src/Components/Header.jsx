import React from 'react';

export default function Header(){
    return(
        <header className = "App-header">
            <img src = {process.env.PUBLIC_URL + './image-assets/TH-logo.jpg'} alt = 'TH.com logo' className = 'logo' />
            <div>
            <p className = "Title"> T. Harrison's </p> 
            <p className = "SubTitle"> For all your dog needs!</p>
            </div>
           
            <nav className = 'nav' >
                <a href = '#' >
                    <div className = 'page-icon'>
                        <img src = {process.env.PUBLIC_URL + './image-assets/products-page.png'} className = 'menu-icon' alt = 'Products Page Icon' title = 'Products Page' />
                        <p className = 'page-name' > Home </p>
                        
                    </div>
                </a>
                <a href = '#' >
                    <div className = 'page-icon'>
                        <img src = {process.env.PUBLIC_URL + './image-assets/shopping-cart.png'} className = 'menu-icon' alt = 'Shopping Cart Page Icon' title = 'Shopping Cart' />
                        <p className = 'page-name'> Shopping Cart</p>
                    </div>
                </a>
                <input type = 'text' placeholder = 'Search...' className = 'search-bar' />
            </nav>
        </header>
    )
}