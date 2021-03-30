import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Home from "./Home";
import NavBar from "./components/NavBar";
import ProductsTabBar from "./components/ProductListTab/ProductsTabBar";
import ProductDetails from "./components/ProductsDetails";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/productsTab">
            <ProductsTabBar />
          </Route>
          <Route path="/products/:id">
          <ProductDetails />
        </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
