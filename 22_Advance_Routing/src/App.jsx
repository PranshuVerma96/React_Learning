import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Weman from "./pages/Weman";
import Kids from "./pages/Kids";
import Coures from "./pages/Coures";
import CoursesData from "./pages/CoursesData";

const App = () => {
  return (
    <div className="h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Weman />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/courses" element={<Coures />} />
        <Route path="/courses/:id" element={<CoursesData />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
