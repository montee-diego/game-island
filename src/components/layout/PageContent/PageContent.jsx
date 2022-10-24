import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Browse, Discover, GameDetails, Games, Home, PageNotFound, Search } from "@pages";
import * as Styled from "./PageContent.styled";

const PageContent = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Styled.Container>
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
    </Styled.Container>
  );
};

export default PageContent;
