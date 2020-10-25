import "./App.css";
import Counter from "./Counter";
import { Component } from 'react';

class App extends Component {
  render(){
 return (
   <div className="App">
   <h1>COUNTER APPLICATION</h1>
   <Counter  />
   </div>
   );
 }
}

export default App;