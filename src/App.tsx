import React from 'react';
import {WineData} from './util/WineData'
import { groupingData,makeArray, Mean,Median,Mode} from './util/grouping';
import './App.css';

function App() {

  const groupedData =  groupingData(WineData)
  const FlavanoidsClassWise ={}
  const keys = Object.keys(groupedData)
  for(const key of keys){
    //  console.log(key)
 
    const Flavanoids = makeArray(groupedData[key])
    const mean  = Mean(Flavanoids)
    const median = Median(Flavanoids)
    const modes = Mode(Flavanoids)
    console.log(mean)
    console.log(median)
    console.log(modes)
  }
// console.log(FlavanoidsClassWise)
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
