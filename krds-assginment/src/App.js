
import './App.css';
import ErrorBoundary from './Components/Errorboundary';
import HomePage from './Components/Homepage';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
     <HomePage/>
     </ErrorBoundary>
    </div>
  );
}

export default App;
