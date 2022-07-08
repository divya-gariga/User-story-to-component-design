import React from "react";
import Footer from "./components/organisms/Footer/Footer";
import Header from "./components/organisms/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Library from "./components/pages/Library/Library";
import Entrepreneurship from "./components/pages/Entrepreneurship/Entrepreneurship";
import BookDetails from "./components/pages/BookDetails/BookDetails";
import { theme } from "./Theme/Theme"
import { ThemeProvider } from "@emotion/react";
import "./app.css"
function App() {
  return (
    <ThemeProvider theme={theme}>

      <Router >
       
          <Header/>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Library} />
            <Route exact path="/Entrepreneurship" component={Entrepreneurship} />
            <Route
              exact
              path="/Entrepreneurship/:id"
              component={BookDetails}
            />
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>

    </ThemeProvider>
  );
}

export default App;
