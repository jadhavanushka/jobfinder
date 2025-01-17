import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Stats from './components/Stats';
import Categories from './components/Categories';
import JobSection from './components/JobsSection';
import Feedbacks from './components/Feedbacks';

function App() {
  return (
    <div className="App bg-gray-50 min-h-screen">

      <Navbar />
      <Header />
      <Stats />
      <Categories />
      <JobSection />
      <Feedbacks />

    </div>
  );
}

export default App;
