  
import React, {useEffect, useState} from 'react';
import './App.css';
import items from './items.json';
import Header from './Components/Header';
import Items from './Components/Items'
import ShoppingCart from './Components/ShoppingCart';
import SearchPage from './Components/SearchPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  const [items, setItems] = useState(Items);

  useEffect(() => {
    Items(items);
  }, [])

  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    setSearchInput('')
  }, [])

  useEffect(()=> {
    console.log("searchInput in /App", searchInput);
    console.log("shopping cart in app", shoppingCart);
})

  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <Router>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <Switch>
        <Route path='/' exact render={(props) => <Items {...props} items={items} setItems={setItems} shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart} />} />
         <Route path='/items' render={(props) => <Items {...props} items={items} setItems={setItems}shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart} /> } />
        <Route path='/shoppingcart' render = {(props) => <ShoppingCart {...props} ShoppingCart = {ShoppingCart} items={items} setItems={setItems}shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart}/>} />
        <Route path='/searchpage' render={(props) => <SearchPage {...props} setItems={setItems} searchInput={searchInput} />} />
      </Switch>
    </Router> 
  );
}

export default App;