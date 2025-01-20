import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Stats from './components/Stats';
import Categories from './components/Categories';
import JobSection from './components/JobsSection';
import Steps from './components/Steps';
import Feedbacks from './components/Feedbacks';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App bg-gray-50 min-h-screen">

      <Navbar />
      <Header />
      <Stats />
      <Categories />
      <JobSection />
      <Steps />
      <Feedbacks />
      <Blogs />

    </div>
  );
}

export default App;
