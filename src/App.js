import './App.css';
import './index.css';
import MainComponent from './components/MainComponent';
import { Macbook } from './components/Macbook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Macbook />
        <MainComponent />
      </header>
    </div>
  );
}

export default App;
