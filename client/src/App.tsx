import "./App.scss";
import { Header, Footer } from "./components/";
import { HomePage } from "./pages";
import { PageHOC } from "./HOCS";
import { Route, Switch } from "wouter";
import { routes } from "./utils/constants";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path={routes.lobby}>LOBBY ROUTE</Route>
          <Route path={routes.searchLobby}>SEARCH LOBBY ROUTE</Route>
          <Route path={routes.createLobby}>CREATE LOBBY ROUTE</Route>
          <Route path={routes.home}>
            <PageHOC title="interchanger">
              <HomePage />
            </PageHOC>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
