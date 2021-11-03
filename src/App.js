import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from "./routes";
import './App.css';

import Menu from "./components/template/Menu/Menu";
import Header from "./components/template/Header/Header";
import Footer from "./components/template/Footer/Footer";

function App() {
  return (
    <>
      <section>
      <Menu/>
      <Header/>
      <div className="main-content">
      <Router>
        <Routes/>
      </Router>
      </div>
      </section>
      <Footer/>
    </>
  );
}

export default App;
