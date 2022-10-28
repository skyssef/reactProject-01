import './App.css';
import React from 'react';
import Graphe from './components/Graphe';
import { Component } from 'react';

class App extends Component {
  state={
    info:{
        balence:0,
        earning:0,
        lose:0
    },
    barInfo:{
        desc:"",
        amount:0,
        choice:""
    },
    cathegory:"",
    filterCat:'All',
    catList:[],
    valueList:[],
    barList:[],
    earnning:{name:"earnning"   ,data:[]},
    balence :{name:"balence"    ,data:[]},
    losses  :{name:"losses"     ,data:[]},
    page:"listItem",
    tutorial:true
}


  render(){
    return (
    <div className="App">
      <Graphe data={this.state} />
    </div>
  );
  }
  
}

export default App;
