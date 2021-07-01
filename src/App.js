import './styles/App.css';
import { Navigation } from './components/navigation/Navigation';
import { FrontPage } from './pages/frontpage/FrontPage';
import { EventPage } from './pages/eventpage/EventPage';
import { LineupPage } from './pages/lineuppage/LineupPage';
import { ProgramPage } from './pages/programpage/ProgramPage';
import { CampPage } from './pages/camppage/CampPage';
import { InfoPage } from './pages/infopage/InfoPage';
import { BilletterPage } from './pages/billetterpage/BilletterPage';
import { LoginPage } from './pages/loginpage/LoginPage';
import { BrowserRouter as Browser, Switch, Route, Redirect } from 'react-router-dom';



function App() {
  return (

    <Browser>
      <Navigation />
      <Switch>
        <Route exact path="/forside">
          <FrontPage />
        </Route>
        <Route exact path="/events">
          <EventPage />
        </Route>
        <Route exact path="/line-up">
          <LineupPage />
        </Route>
        <Route exact path="/program">
          <ProgramPage />
        </Route>
        <Route exact path="/camps">
          <CampPage />
        </Route>
        <Route exact path="/billetter">
          <BilletterPage />
        </Route>
        <Route exact path="/praktisk-info">
          <InfoPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route path="/">
          <Redirect to="/forside"></Redirect>
        </Route>
      </Switch>

    </Browser>


  );
}

export default App;
