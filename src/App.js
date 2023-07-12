import './App.css';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

// colour pallete
// 001011 black, primary
// 093A3E midnight green, sceondary
// 3AAFB9 verdigris (teal basically), tertiary
// 64E9EE eletric blue, accent
// 97C8EB light sky blue, other accent

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
