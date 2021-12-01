import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Share/Navigation/Navigation';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path={`/detail/:detailId`} element={<Detail />} />
        <Route path='/blog' element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
