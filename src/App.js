import { useState } from 'react';
import useMeanMedianMode from './hooks/useMeanMedianMode';
import CustomTable from './components/CustomTable';
import { WineData } from './util/WineData';
import './App.css';

function App() {

const [wineData,] = useState(WineData)
  const FlavanoidsClassWise = useMeanMedianMode(wineData,'Flavanoids')
  const GammaClassWise = useMeanMedianMode(wineData,'Gamma')


  return (
    <div className="App">
      {FlavanoidsClassWise   && <CustomTable title={"Flavanoids Measures"} data={FlavanoidsClassWise} />}
      {GammaClassWise  &&<CustomTable title={"Gamma Measures"} data={GammaClassWise} />}
    </div>
  );
}

export default App;
