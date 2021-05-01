import './App.css';
import Get from './components/get/index.js';
import Put from './components/put/index.js'
import Delete from './components/delete/index.js'
import Patch from './components/patch/index.js'

function App() {
  return (
    <div className="App">
      <Get/>
      <Put/>
      <Delete/>
      <Patch/>
    </div>
  );
}

export default App;
