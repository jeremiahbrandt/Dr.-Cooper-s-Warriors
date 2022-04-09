import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Groups from './components/Groups';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/Groups' component={Groups} />
        <Route path='/Events' component={Events} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
