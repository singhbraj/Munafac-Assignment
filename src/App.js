import useMeanMedianMode from './hooks/useMeanMedianMode';
import CustomTable from './components/Table';
import './App.css';

function App() {

  const FlavanoidsClassWise = useMeanMedianMode()
console.log(FlavanoidsClassWise)
  return (
    <div className="App">
      {/* {FlavanoidsClassWise?.map((item)=>{ */}
       <CustomTable title={"Flavanoids Measures"} data={FlavanoidsClassWise} />
      {/* })} */}
    </div>
  );
}

export default App;
