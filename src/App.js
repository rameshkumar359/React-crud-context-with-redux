import './App.css';
import {Home} from './components/Home';
import {Edit} from './components/Edit';
import {Adduser} from './components/Adduser';
import {Error} from './components/Error';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Globalprovider} from './context/Globalstate'
import './crud.css'

function App() {
  return (
    <div className="main">
      <div className="Navbar bg-dark">Navbar</div>
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <Globalprovider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  path="/edit/:id" element={<Edit/>}/>
          <Route  path="/add" element={<Adduser/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
      </Globalprovider>
    </div>
    </div>
  );
}

export default App;
