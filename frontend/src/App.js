
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Signup from './screens/Signup.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import AdminMain from './screens/admin/Main.js';

function App() {
  return (
    <Router>
    <div>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/creatuser" element={<Signup/>} />
        <Route exact path="/adminpanel" element={<AdminMain/>} />
      </Routes>
      <Footer/>
    </div>
    </Router>
   
  );
}

export default App;
