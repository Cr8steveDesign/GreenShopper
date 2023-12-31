// Page Holding Information about the Company and possibly about me the developer

import AboutOrganic from "../Components/AboutOrganic.jsx";
import AboutFresh from "../Components/AboutFresh.jsx";
import AboutDelivered from "../Components/AboutDelivered.jsx";
import AboutTeam from "../Components/AboutTeam.jsx";

const AboutUs = () => {
  return (
    <div className="w-full max-w-screen-xl p-6 mx-auto">
      <AboutOrganic />
      <AboutFresh />
      <AboutDelivered />
      <AboutTeam />
    </div>
  );
};

export default AboutUs;
