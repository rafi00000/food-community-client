import BannerSection from "./Home_component/BannerSection";
import Featured from "./Home_component/Featured";
import Faqsection from "./Home_component/Faqsection";
import Testimonials from "./Home_component/Testimonials";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HomePage = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Share Food || Home</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <BannerSection></BannerSection>
        <Featured></Featured>
        <Testimonials></Testimonials>
        <Faqsection></Faqsection>
      </HelmetProvider>
    </div>
  );
};

export default HomePage;
