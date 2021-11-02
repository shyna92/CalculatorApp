
import './App.css';
import add, { multi,sub,divi } from './cal';

function App() {
  return (<>
  <h1>calculatorapp</h1>
  <ul>
    <li>{add(10,20)}</li>
    <li>{sub(10,20)}</li>
    <li>{multi(10,20)}</li>
    <li>{divi(10,20)}</li>
  </ul>


  </>  
  );
}

export default App;
