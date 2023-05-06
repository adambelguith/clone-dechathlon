
import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import {HeaderHome} from './components/headerHome';
import NavBar from './components/navBar';
import Content from './components/content';
import Voyage from './components/voyage';
import Footer from './components/footer';


function App() {
  
  return (
    <div>
      <NavBar />
        <Routes>
            <Route exact path="/" element={<HeaderHome />} />
            <Route exact path="/voyage" element={<Voyage />} />
        </Routes>
      <Footer />
    </div>  
  );
}


export default App;
