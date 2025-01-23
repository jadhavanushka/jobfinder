import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Stats from './components/Stats';
import Categories from './components/Categories';
import JobSection from './components/JobsSection';
import Steps from './components/Steps';
import Feedbacks from './components/Feedbacks';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-slate-100 min-h-screen">
      <Navbar />
      <Header />
      <Stats />
      <Categories />
      <JobSection />
      <Steps />
      <Feedbacks />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
