import { GlobalStyle } from "@styles/GlobalStyle";
import { Footer, Header, PageContent } from "@components";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
