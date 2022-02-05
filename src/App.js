import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar"
import Text from "./firstarea"
function App() {
  return (
    <div>
    
      <Navbar />
    <Text />  

    <p className="lead">
  This is a lead paragraph. It stands out from regular paragraphs.
</p>
    </div>  
    )
}

export default App;
