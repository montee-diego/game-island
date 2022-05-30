import { default as styled } from "styled-components";
import { Link } from "react-router-dom";

const BrowseMenu = ({ path }) => {
  const location = path.split("/")[3];

  return (
    <Container>
      <MenuList>
        <li className={location === "main" ? "active" : ""}>
          <Link to='/games/discover/main'>Latest</Link>
        </li>
        <li className={location === "popular" ? "active" : ""}>
          <Link to='/games/discover/popular'>Popular</Link>
        </li>
        <li className={location === "recent-games" ? "active" : ""}>
          <Link to='/games/discover/recent-games'>This Week</Link>
        </li>
        <li className={location === "recent-games-future" ? "active" : ""}>
          <Link to='/games/discover/recent-games-future'>Upcoming</Link>
        </li>
      </MenuList>
    </Container>
  );
};

const Container = styled.div`
  background-color: #28313f;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0rem auto;

  li {
    padding: 0.7rem 0rem;
    flex-grow: 1;

    &.active {
      background-color: #2e3a4e;
    }

    a {
      display: block;
      text-align: center;
      transition: color 0.25s ease;

      &:hover {
        color: white;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0rem;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    li {
      padding: 0.7rem;

      a {
        white-space: nowrap;
      }
    }
  }
`;

export default BrowseMenu;
