import { useState } from "react";
import { useLocation } from "react-router";
import { Link, useNavigate, createSearchParams } from "react-router-dom";
import { default as styled } from "styled-components";
import { motion } from "framer-motion";

import BrowseMenu from "./BrowseMenu";
import GamesMenu from "./GamesMenu";
import SearchIcon from "../img/icon-search.svg";

import { Navbar as Sidebar } from "@components";

const Nav = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleInput = e => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.target[0].blur();

    let params = createSearchParams({ query: searchInput });

    navigate({ pathname: "/search", search: `?${params}` });
    setSearchInput("");
    window.scrollTo(0, 0);
  };

  return (
    <nav onMouseLeave={() => setIsMenuOpen(false)}>
      <NavWrapper>
        <NavBar>
          <div className='top-bar'>
            <Link to='/' id='logo'>
              Game Island
            </Link>

            <button
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseDown={() => setIsMenuOpen(!isMenuOpen)}>
              Browse
            </button>

            <form className='search' onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Search Games...'
                size='10'
                value={searchInput}
                onChange={handleInput}
              />
              <button type='submit'>
                <img className='search-icon' src={SearchIcon} alt='search' />
              </button>
            </form>
          </div>

          {isMenuOpen && <Sidebar />}

          {/* <Explore>
            <li>
              <Link to={"/"}>HOME</Link>
              <Line initial={{ opacity: 0 }} animate={{ opacity: pathname === "/" ? 1 : 0 }} />
            </li>
            <li>
              <Link to={"/games/discover/main"}>GAMES</Link>
              <Line
                initial={{ opacity: 0 }}
                animate={{
                  opacity: pathname.startsWith("/games") ? 1 : 0,
                }}
              />
            </li>
            <li>
              <Link to={"/browse/genres"}>BROWSE</Link>
              <Line
                initial={{ opacity: 0 }}
                animate={{
                  opacity: pathname.startsWith("/browse") ? 1 : 0,
                }}
              />
            </li>
          </Explore> */}
        </NavBar>
      </NavWrapper>
      {/* {pathname.startsWith("/browse") && <BrowseMenu path={pathname} />}
      {pathname.startsWith("/games") && <GamesMenu path={pathname} />} */}
    </nav>
  );
};

const NavWrapper = styled.div`
  width: 100%;
  background-color: #2b3444;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    #logo {
      font-family: "Bungee Shade", cursive;
      font-size: 1.8rem;
      margin-right: 1rem;
      line-height: 56px;
    }

    .search {
      display: flex;
      flex-grow: 1;

      input {
        flex-grow: 1;
      }

      button {
        background-color: #3f4a5e;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-left: none;
        border-radius: 0rem 0.5rem 0.5rem 0rem;
        padding: 0.5rem;
        cursor: pointer;
        transition: background-color 0.25s ease;

        &:hover {
          background-color: #505e79;
        }
      }

      .search-icon {
        width: 1.5rem;
        height: 1rem;
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;

      #logo {
        margin-right: 0rem;
      }

      .search {
        width: 95%;
      }
    }
  }
`;

const NavBar = styled.div`
  width: 90%;
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Explore = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    flex-grow: 1;
    position: relative;

    a {
      display: block;
      padding: 0.7rem 0rem;
      text-align: center;
      font-weight: 700;
      transition: color 0.5s ease;
      color: #959caa;

      &:hover {
        color: #c1c6cf;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #3f4a5e;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
`;

export default Nav;
