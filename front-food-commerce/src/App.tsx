import { BrowserRouter } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { SnackProvider } from "./contexts/snackContext";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { Theme } from "./styles/Theme";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Theme>
          <SnackProvider>
            <AppRoutes />
            <GlobalStyle />
            <Normalize />
          </SnackProvider>
        </Theme>
      </BrowserRouter>
    </div>
  );
}

export default App;
