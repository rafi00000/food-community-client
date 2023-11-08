
import BannerSection from "./Home_component/BannerSection";
import Featured from "./Home_component/Featured";
import Faqsection from './Home_component/Faqsection';
import Testimonials from './Home_component/Testimonials';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const HomePage = () => {

    return (
        <div>
            <BannerSection></BannerSection>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <Faqsection></Faqsection>
        </div>
    );
};

export default HomePage;