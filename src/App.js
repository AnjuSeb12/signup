import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";






function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={ <Home/>}/>

      <Route path="/signup" element={ <Signup/>}/>
      <Route path="/login" element={ <Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
