import React from "react";
import { Routes, Route } from "react-router-dom";
import Listpost from "./components/Posts/List-Post/Listpost";
import Addpost from "./components/Posts/Add-Post/Addpost";
import Editpost from "./components/Posts/Edit-Post/Editpost";
import Navbar from "./components/Navigation/Navbar";
import Register from "./components/Authentication/Register/Register";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listpost />} />
        <Route path="/add" element={<Addpost />} />
        <Route path="edit-post/:id" element={<Editpost />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
