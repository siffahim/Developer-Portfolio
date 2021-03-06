import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home/Home';
import Media from './Pages/Media/Media';
import NotFound from './Pages/NotFound/NotFound';
import Navigation from './Pages/Share/Navigation/Navigation';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease',
      anchorPlacement: 'top-bottom'
    });
  }, [])

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path={`/detail/:detailId`} element={<Detail />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/media' element={<Media />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
