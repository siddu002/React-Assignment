import Header from './Component/Header';
import Home from './Component/Home';
import './App.css';
import Features from './Component/Features';
import Footer from './Component/Footer';
import Faq from './Component/Faq';
import Statisticdata from './Component/Statisticdata';
import BlogSection from './Component/BlogSection';
import FreeTrialBanner from './Component/FreeTrialBanner';
import ProjectTesstimonal from './Component/ProjectTesstimonal'

function App() {
  return (
    <div className="App">
    <Header/>
    <Home />
    <Features/>
    <ProjectTesstimonal/>
    <Statisticdata/>
    <Faq/>
    <BlogSection/>
    <FreeTrialBanner/>
    <Footer/>
    </div>
  );
}

export default App;
