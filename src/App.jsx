import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/test" element=<Test /> />
        </Routes>
      </Routers>
    </>
  );
}

export default App;
