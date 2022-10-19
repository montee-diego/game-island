import * as Styled from "./Navbar.styled";

const navigation = {
  games: [
    {
      name: "Latest",
      path: "/games/discover/main",
    },
    {
      name: "Popular",
      path: "/games/discover/popular",
    },
    {
      name: "This Week",
      path: "/games/discover/recent-games",
    },
    {
      name: "Upcoming",
      path: "/games/discover/recent-games-future",
    },
  ],
  browse: [
    {
      name: "Genre",
      path: "/browse/genres",
    },
    {
      name: "Platforms",
      path: "/browse/platforms",
    },
    {
      name: "Publishers",
      path: "/browse/publishers",
    },
    {
      name: "Stores",
      path: "/browse/stores",
    },
    {
      name: "Developers",
      path: "/browse/developers",
    },
  ],
};

const Navbar = () => {
  return (
    <Styled.Container>
      <div>
        <Styled.Title>GAMES</Styled.Title>
        <Styled.List>
          {navigation.games.map(item => (
            <li>
              <Styled.Link to={item.path}>{item.name}</Styled.Link>
            </li>
          ))}
        </Styled.List>
      </div>
      <div>
        <Styled.Title>BROWSE</Styled.Title>
        <Styled.List>
          {navigation.browse.map(item => (
            <li>
              <Styled.Link to={item.path}>{item.name}</Styled.Link>
            </li>
          ))}
        </Styled.List>
      </div>
    </Styled.Container>
  );
};

export default Navbar;
