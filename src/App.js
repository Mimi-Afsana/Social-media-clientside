import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/share/login/Login";
import Register from "./components/share/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/profile/:username" element={<Profile></Profile>}></Route>
    </Routes>
  );
}

export default App;
