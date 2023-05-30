import { BrowserRouter } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { SnackProvider } from "./contexts/snackContext";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { Theme } from "./styles/Theme";
import { CartProvider } from "./contexts/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Theme>
          <SnackProvider>
            <CartProvider>
              <AppRoutes />
              <GlobalStyle />
              <ToastContainer autoClose={2000} />
              <Normalize />
            </CartProvider>
          </SnackProvider>
        </Theme>
      </BrowserRouter>
    </div>
  );
}

export default App;
