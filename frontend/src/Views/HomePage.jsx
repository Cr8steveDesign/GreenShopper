// Home Page Component Which will house other sub components such as the Hero Section, Featured Section, et al.
import HeroSection from "../Components/HeroSection.jsx";
import DetailsBar from "../Components/DetailsBar.jsx";

const HomePage = () => {
  return (
    <div className="p-6 flex flex-col items-center">
      <HeroSection />
      <DetailsBar />
    </div>
  );
};

export default HomePage;
