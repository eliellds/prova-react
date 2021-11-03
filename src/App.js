import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from "./routes";
import './App.css';

import Header from "./components/template/Header/Header";

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes/>
      </Router>
    </>
  );
}

export default App;
