import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Browse from "./pages/Browse";
import Discover from "./pages/Discover";
import Footer from "./components/Footer";
import GameDetails from "./pages/GameDetails";
import Games from "./pages/Games";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/error' element={<PageNotFound />} />
        <Route path='/browse/:type' element={<Browse />} />
        <Route path='/browse/game/:id' element={<GameDetails />} />
        <Route path='/games/:type/:id' element={<Games />} />
        <Route path='/games/discover/:type' element={<Discover />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
