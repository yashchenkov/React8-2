import logo from './logo.svg';
import './App.css';
import Data from './Components/Data'
import Error from './Components/Error'
import Loading from './Components/Loading'

function App() {
  
  return (
    <div className="App">
      <Data/>
      <Error/>
      <Loading/>
    </div>
  );
}

export default App;
