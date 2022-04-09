import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Events from './components/Events';
import AccountPage from "./components/AccountPage/AccountPage";
import Registration from './components/RegistrationPage/RegistrationPage';
import GroupsPage from './components/GroupsPage/GroupsPage';
import Footer from './components/Footer';
import GroupPage from './components/GroupPage/GroupPage';
import CreateGroupModal from './components/CreateGroupModal';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/account' element={<AccountPage />} />
          <Route path='/Groups' element={<GroupsPage />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/Register' element={<Registration />} />
          <Route path='/Account' element={<AccountPage />} />
          <Route path='/GroupPage' element={<GroupPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
