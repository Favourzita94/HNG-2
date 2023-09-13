import './index.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import MovieDetails from './Components/MovieDetails'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/movies/:id' element={<MovieDetails />}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
