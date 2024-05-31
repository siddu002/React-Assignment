import Header from './Component/Header';
import Home from './Component/Home';
import './App.css';
import Features from './Component/Features';
import Footer from './Component/Footer';
import Faq from './Component/Faq';
import Statisticdata from './Component/Statisticdata';
import BlogSection from './Component/BlogSection';
import FreeTrialBanner from './Component/FreeTrialBanner'

function App() {
  return (
    <div className="App">
    <Header/>
    <Home />
    <Features/>
    <Statisticdata/>
    <Faq/>
    <BlogSection/>
    <FreeTrialBanner/>
    <Footer/>
    </div>
  );
}

export default App;
