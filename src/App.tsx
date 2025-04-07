import { Titlebar } from "./ui/Titlebar";
import { Header } from "./ui/Header";
import { Main } from "./ui/Main";
import { AppContextProvider } from "./AppContext";

window.addEventListener("contextmenu", (e) => e.preventDefault());

// import {getCurrentWindow} from "@tauri-apps/api/window"
// getCurrentWindow().onCloseRequested(async e => {
//   e.preventDefault();

//   alert("Trynna leave huh?")

// })
// unlisten();


function App() {
  return (
    <AppContextProvider>
      <Titlebar/>
      <Header />
      <Main />
    </AppContextProvider>
  );
}

export default App;
