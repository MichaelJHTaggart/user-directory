import React, { Component } from 'react';
import Header from './Components/Header';
import ProductContainer from './Components/ProductContainer';
import Button from './Components/Button';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="App-body">
        <ProductContainer />
        <Button />
      </div>
    </div>
  );
}
export default App;
