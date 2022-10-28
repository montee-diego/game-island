import { HomeList } from "@components";

export const Home = () => {
  return (
    <section>
      <HomeList type='main' order='-relevance' id='latest' />
      <HomeList type='popular' order='-relevance' id='popular' />
      <HomeList type='recent-games' order='-added' id='thisweek' />
      <HomeList type='recent-games-future' order='-added' id='upcoming' />
    </section>
  );
};
