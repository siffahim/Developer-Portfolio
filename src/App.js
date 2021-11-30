import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/web' element={<Home />} />
        <Route path='/programming' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
