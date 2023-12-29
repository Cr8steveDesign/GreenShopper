// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components and Views
import Header from "./Components/Header.jsx";
import HomePage from "./Views/HomePage.jsx";
import Shop from "./Views/Shop.jsx";
import ContactUs from "./Views/ContactUs.jsx";
import AboutUs from "./Views/AboutUs.jsx";
import Footer from "./Components/Footer.jsx";

// Component Logic Begins from here.

function App() {
  return (
    <BrowserRouter>
      <div className="w-full">
        {/* Header Component */}
        <Header />
        {/* Routes Will go in here */}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="*"
            element={() => <p>Sorry That page is not Found!</p>}
          />
        </Routes>
        {/* Create Footer Component */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
