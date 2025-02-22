import { Header } from "./ui/Header";
import { Main } from "./ui/Main";
import { AppContextProvider } from "./AppContext";

window.addEventListener("contextmenu", (e) => e.preventDefault())

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