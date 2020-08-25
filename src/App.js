import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import User from './components/User/User';
import fakedata from '../src/Fakedata/fakedata';
import Cart from './components/Cart/cart';


function App() {
  console.log(fakedata)
  return (
    <div className="App">
      <Header></Header>
      <div className="main">
      <div className="main-left">
      {
        fakedata.map(data => <User fakedata={data}></User>)
      }
      </div>
      <div className="main-right">
        <Cart></Cart>
      </div>
      </div>
    </div>
  );
}

export default App;
