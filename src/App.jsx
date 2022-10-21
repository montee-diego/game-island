import { GlobalStyle } from "@styles/GlobalStyle";
import Footer from "./components/Footer";
import Pages from "./containers/Pages/Pages";

import { Header } from "@components";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
