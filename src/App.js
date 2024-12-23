import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home';
import DetailsPage from './components/DetailsPage';
import Catalog from './components/Catalog';

import AOS from 'aos';
import { isMobile } from 'react-device-detect';

import 'aos/dist/aos.css';
import './fonts.css';

function NotFoundPage() {
  return (
      <div style={{textAlign: 'center', padding: '50px'}}>
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/">Go back to Homepage</Link>
      </div>
  );
}

function App() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }, []);

  return (
    <Router basename={process.env.BASE_PATH}>
      <Switch>
        <Route exact path="/">
          <div>
            pxCode Screen List: <br />
            <Link to="/Home">Home</Link>
            <br />
            <Link to="/DetailsPage">DetailsPage</Link>
            <br />
            <Link to="/Catalog">Catalog</Link>
          </div>
        </Route>

        <Route exact path="/Home" component={Home} />
        <Route exact path="/DetailsPage" component={DetailsPage} />
        <Route exact path="/Catalog" component={Catalog} />

        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default App;
