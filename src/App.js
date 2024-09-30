import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";

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
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  const location = useLocation();

  // Define the routes where you want to hide the Navbar and Footer
  const hideNavAndFooterRoutes = ['/dashboard','/admin'];

  return (
    <div className="App w-[100%] max-w-full mx-auto">
      <ScrollToTop />

      {/* Conditionally render the Navbar */}
      {!hideNavAndFooterRoutes.includes(location.pathname) && <Navbar />}

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
        <Route path='/admin' element={<><Login /></>} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

      {/* Conditionally render the Footer */}
      {!hideNavAndFooterRoutes.includes(location.pathname) && (
        <section id='footer212'>
          <Footer />
        </section>
      )}
    </div>
  );
}

export default App;
