import React,{Component} from 'react';
import {Router} from 'react-router-dom';
import {Home, About} from 'pages';

class App extends Comment {
  render(){
    return (
      <div>
        <Router exact path="/" component={Home}/>
        <Router exact path="/about" component={About}/>
      </div>
     );
  }
  
}

export default App;
