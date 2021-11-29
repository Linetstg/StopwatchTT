import './App.css';
import Buttons from './components/Buttons';
import Timer from './components/Timer';

function App() {
  return (
    <div className="main-section">
      <div className="stopwatch-holder">
          <div>
            <Timer />
            <Buttons />
          </div>
      </div>
      
    </div>
  );
}

export default App;
