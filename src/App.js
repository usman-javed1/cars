import logo from './logo.svg';
import './App.css';
import Navbar from './components/General/Navbar';
import Card from './components/General/Card';
import HeroSection from './components/main/HeroSection/HeroSection';
import Features from './components/main/Features/Features';
import Details from './components/main/Details/Details';
import Categories from './components/main/Categories/Categories';
import HowWorks from './components/main/HowWorks/HowWorks';
import FAQ from './components/main/FAQ/FAQ';
import Explore from './components/main/Explore/Explore';
import Footer from './components/General/Footer';

function App() {
  return (
    <div className="App w-[100%] max-w-full mx-auto">
      <Navbar />
      <HeroSection />
      <div className="w-full max-w-full mx-auto">
        <Features />
        <Details />
        <Categories />
        <HowWorks />
        <FAQ />
      </div>
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
