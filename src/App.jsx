import { GlobalStyle } from "@styles/GlobalStyle";
import { Footer, Header, Views } from "@components";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Views />
      <Footer />
    </div>
  );
}

export default App;
