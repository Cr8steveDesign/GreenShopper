// Component to Animate Page Transition
// This is important so as to have access to
// get the location and pass it to the Animated Component

import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

// Views
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

/**
 * AnimateRoutes
 * @location - Add the location object as a prop for the Routes Component
 * @key - use the .pathname attribute on the location object as the key for the Routes component
 *
 * Go to each of the page components and add animations for them
 */

// Component starts here
const AnimateRoutes = () => {
  // instantiate the location object

  const location = useLocation();

  return (
    <AnimatePresence>
      <div className="w-full">
        {/* Header Component */}
        <Header />
        {/* Routes Will go in here */}
        <Routes location={location} key={location.pathname}>
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
    </AnimatePresence>
  );
};

export default AnimateRoutes;
