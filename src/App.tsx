import React, { useState } from 'react';
import useMeanMedianMode from './hooks/useMeanMedianMode';
import CustomTable from './components/CustomTable';
import { WineData } from './util/WineData';
import './App.css';
import {WineDataType} from './util/model';

function App():JSX.Element  {

const [wineData] = useState<WineDataType[]>(WineData);
  const FlavanoidsClassWise = useMeanMedianMode(wineData,'Flavanoids')
  const GammaClassWise = useMeanMedianMode(wineData,'Gamma')


  return (
    <div className="App">
      {FlavanoidsClassWise   && <CustomTable name={"Flavanoids"} title={"Flavanoids Measures"} data={FlavanoidsClassWise} />}
      {GammaClassWise  &&<CustomTable name={"Gamma"} title={"Gamma Measures"} data={GammaClassWise} />}
    </div>
  );
}

export default App;
