import './App.css';
import Cover from './components/cover/Cover';
import { Gallery } from './components/gallery/Gallery';
import NavBar from './components/navbar/NavBar';
import Sobre from './components/sobre/Sobre';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Cover/>
      <Sobre/>
      <Gallery/>
    </div>
  );
}

export default App;
