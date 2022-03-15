import './App.css';
import Hero from './Components/Hero/Hero';
import HighlightSection from './Components/Highlight-Section/HighlightSection';
import Navbar from './Components/Navbar/Navbar';
import Information from './Components/Information/Information';
import Footer from './Components/Footer/Footer';
import RegisterCallout from './Components/RegisterCallout/RegisterCallout';
import SocialMedia from './Components/SocialMedia/SocialMedia';
import FooterBottom from './Components/Footer/FooterBottom';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <HighlightSection />
    <Information />
    <RegisterCallout />
    <SocialMedia />
    <Footer />
    <FooterBottom />
    </>
  );
}

export default App;
