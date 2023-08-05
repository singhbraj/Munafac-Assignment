import useMeanMedianMode from './hooks/useMeanMedianMode';
import CustomTable from './components/CustomTable';
import './App.css';

function App() {

  const FlavanoidsClassWise = useMeanMedianMode('Flavanoids')
  // console.log(FlavanoidsClassWise)
  const GammaClassWise = useMeanMedianMode('Gamma')
  // console.log(GammaClassWise)

  return (
    <div className="App">
      {/* {FlavanoidsClassWise   && <CustomTable title={"Flavanoids Measures"} data={FlavanoidsClassWise} />}
      {GammaClassWise  &&<CustomTable title={"Gamma Measures"} data={GammaClassWise} />} */}
      <CustomTable title={"Flavanoids Measures"} data={FlavanoidsClassWise} name={"Flavanoids"} />
      <CustomTable title={"Gamma Measures"} data={GammaClassWise} name={"Gamma"} />
    </div>
  );
}

export default App;
