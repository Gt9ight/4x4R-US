import { HashRouter as Router } from 'react-router-dom';
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <div>
        <Home />
      </div>
    </Router>
  );
}

export default App;
