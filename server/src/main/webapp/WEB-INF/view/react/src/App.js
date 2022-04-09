import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Groups from './components/Groups';
import Events from './components/Events';
import AccountPage from "./components/AccountPage/AccountPage";
import Registration from './RegistrationPage';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Groups' element={<Groups />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/Register' element={<Registration />} />
        <Route path='/Account' element={<AccountPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
