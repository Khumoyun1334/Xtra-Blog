import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./components/Menu";
import { Box, Button, Typography } from "@mui/material";
import SinglePost from "./pages/SinglePost";
import ContactC from "./components/ContactC";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="flex">
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singlepost" element={<SinglePost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
