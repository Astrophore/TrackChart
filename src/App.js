import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'Stock Ticker Chart',
      items:[],
      currentItem:{
        ticker:'',
        price:'',
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        [e.target.text]: e.target.value
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
  }
  render() {
  return (
    <div className="App">
      <h2>{this.state.title}</h2>
      <form id="stockForm" className="stockForm" onSubmit={this.addItem}>
        <input type="text" placeholder="Enter symbol/ticker" value={this.state.currentItem.ticker} onChange={this.handleInput}/>
        <input type="text" placeholder="Enter indicative price bought" value={this.state.currentItem.price} onChange={this.handleInput}/>
        <button onClick={(e)=>this.formSubmit(e)}> Add</button>
      </form>
      </div>
    );
  }
}

export default App;

