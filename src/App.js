import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedCursor from "react-animated-cursor";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home/Home';
import Media from './Pages/Media/Media';
import NotFound from './Pages/NotFound/NotFound';
import Navigation from './Pages/Share/Navigation/Navigation';

function App() {
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
      {/* cursor style */}
      <AnimatedCursor
        innerSize={10}
        outerSize={8}
        color='249, 0, 77'
      />

    </>
  );
}

export default App;
