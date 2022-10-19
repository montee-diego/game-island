import * as Styled from "./Navbar.styled";

const navigation = [
  {
    name: "GAMES",
    data: [
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
  },
  {
    name: "BROWSE",
    data: [
      {
        name: "Genres",
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
  },
];

const Navbar = () => {
  return (
    <Styled.Container>
      {navigation.map(section => (
        <div key={section.name}>
          <Styled.Title>{section.name}</Styled.Title>
          <Styled.List>
            {section.data.map(link => (
              <li key={link.name}>
                <Styled.Link to={link.path}>{link.name}</Styled.Link>
              </li>
            ))}
          </Styled.List>
        </div>
      ))}
    </Styled.Container>
  );
};

export default Navbar;
