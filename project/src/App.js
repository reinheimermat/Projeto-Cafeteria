import './App.css';
import Cover from './components/cover/Cover';
import Footer from './components/footer/Index';
import Grid from './components/grid/Grid';
import Location from './components/location/Index';
import NavBar from './components/navbar/NavBar';
import Sobre from './components/sobre/Sobre';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Cover/>
      <Sobre/>
      <Grid/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
