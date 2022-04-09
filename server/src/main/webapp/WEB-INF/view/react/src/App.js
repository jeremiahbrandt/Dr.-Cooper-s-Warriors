import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Groups from './components/Groups';
import Events from './components/Events';
import AccountPage from "./components/AccountPage/AccountPage";
import Registration from './RegistrationPage';
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/Groups' element={<Groups />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/AccountPage' exact element={<AccountPage />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
