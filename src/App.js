import axios from "axios";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import Login from "./Login";
import Search from "./Search";
import { Route, Link, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}
export default App;
