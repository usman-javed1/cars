import './App.css';
import { Route, Routes } from "react-router-dom";

import Navbar from './components/General/Navbar';
import Footer from './components/General/Footer';

//pages
import LandingPage from './pages/Landingpage';
import About from './pages/About';
import Blog from './pages/Blog';
import CarDetails from './pages/CarDetails';
import FAQ from './pages/FAQ';
import Financing from './pages/Financing';
import News from './pages/News';
import OurTeam from './pages/OurTeam';
import SpecialDeals from './pages/SpecialDeals';
import ViewCars from './pages/ViewCars';
import ScrollToTop from './ScrollTop';

function App() {
  return (
    <div className="App w-[100%] max-w-full mx-auto">
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/financing' element={<Financing />} />
        <Route path='/news' element={<News />} />
        <Route path='/our-team' element={<OurTeam />} />
        <Route path='/special-deals' element={<SpecialDeals />} />
        <Route path='/view' element={<ViewCars />} />
        <Route path='/detail/:id' element={<CarDetails />} />
      </Routes>
      <section id='footer212'>
        <Footer />
      </section>
    </div>
  );
}

export default App;
