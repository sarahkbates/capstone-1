import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import bootstrap from 'bootstrap';


export default function Header({searchInput, setSearchInput}){

    const [text, setText] = useState('');

    
    
    let history = useHistory();

    // const handleSearchInputChange = e => setSearchInput(e.target.value);

    // const handleSearch = (e) => {
    //     if(e.key === "Enter"){
    //         setSearchInput(e.target.value);
    //         history.push('/searchpage')
    //     }
    // };

    const onChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        setSearchInput('test');
        console.log(text);
       
    }

    return(
        <header className = "App-header">
            <img src = {process.env.PUBLIC_URL + './image-assets/TH-logo.jpg'} alt = 'TH.com logo' className = 'logo' />
            <div>
            <p className = "Title"> T. Harrison's </p> 
            <p className = "SubTitle"> For all your dog needs!</p>
            </div>
           
            <nav className = 'nav' >
                <Link to='/' >
                    <div className = 'page-icon'>
                        <img src = {process.env.PUBLIC_URL + './image-assets/products-page.png'} className = 'menu-icon' alt = 'Products Page Icon' title = 'Products Page' />
                        <p className = 'page-name' > Home </p>
                        
                    </div>
                </Link>
                <Link to='shoppingcart' >
                    <div className = 'page-icon'>
                        <img src = {process.env.PUBLIC_URL + './image-assets/shopping-cart.png'} className = 'menu-icon' alt = 'Shopping Cart Page Icon' title = 'Shopping Cart' />
                        <p className = 'page-name'> Shopping Cart</p>
                    </div>
                </Link>
                <Link to='searchpage'><form onSubmit = {onSubmit}><input onChange = {onChange} value = {text} type = 'text' placeholder = 'Search...' className = 'search-bar' /><button type = 'submit'>Search</button> </form></Link>
            </nav>
            
         
        </header>
    )
}