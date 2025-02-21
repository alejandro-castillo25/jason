import { Header } from "./ui/Header";
import { Main } from "./ui/Main";
import { AppContextProvider } from "./AppContext";

function App() {

  return (
    <>
      <AppContextProvider>
        <Header/>
        <Main/>
      </AppContextProvider>
    </>
  );
}

export default App;