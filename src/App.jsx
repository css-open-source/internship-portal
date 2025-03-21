import { useState } from "react";
// import { Route, Routes, BrowserRouter as Router } from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Request from "./pages/Request";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
