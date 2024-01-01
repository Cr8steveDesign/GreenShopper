// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components and Views
import Header from "./Components/Header.jsx";
import HomePage from "./Views/HomePage.jsx";
import Shop from "./Views/Shop.jsx";
import ContactUs from "./Views/ContactUs.jsx";
import AboutUs from "./Views/AboutUs.jsx";
import Blog from "./Views/Blog.jsx";
import ErrorPage from "./Views/ErrorPage.jsx";
import Footer from "./Components/Footer.jsx";
import FAQs from "./Views/FAQs.jsx";
import ScrollToTop from "./Utils/ScrollTop.jsx";

// Component Logic Begins from here.

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="w-full">
          {/* Header Component */}
          <Header />
          {/* Routes Will go in here */}
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:para" element={<Shop />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          {/* Create Footer Component */}
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
