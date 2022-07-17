import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./themes";
import { GlobalStyles } from "./global";
import Main from "./pages/Main";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  );
}

export default App;
