import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from "./routes";
import './App.css';

import Menu from "./components/template/Menu/Menu";
import Header from "./components/template/Header/Header";

function App() {
  return (
    <>
      <Menu/>
      <Header/>
      <Router>
        <Routes/>
      </Router>
    </>
  );
}

export default App;
