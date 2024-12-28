import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Stats from './components/Stats';


function App() {
  return (
    <div className="App bg-gray-50 min-h-screen">
      
      <Navbar />
      <Header/>
      <Stats/>
      
    </div>
  );
}

export default App;
