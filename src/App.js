import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './components/home/Home';
import Contact from './components/Contact';
import Controls from './components/controls/Controls';

// import "aui-accordion/dist/aui.bundle";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/" element={<Controls/>} />
          <Route exact path="home" element={<Controls />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="docs" element={<Controls />} />
          <Route exact path="docs/:id" element={<Controls />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
