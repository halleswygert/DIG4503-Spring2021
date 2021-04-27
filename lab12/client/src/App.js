import logo from './logo.svg';
import './App.css';
import PutFunction from './components/put/index'
import GetFunction from './components/get/index'
import DeleteFunction from './components/delete/index'

function App() {
  return (
    <div className="App">
      <PutFunction/>
      <GetFunction/>
      <DeleteFunction/>
    </div>
  );
}

export default App;
