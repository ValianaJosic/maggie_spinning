import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/home';
import Contact from './Pages/Contact/contact'
import Navigation from './Components/Nav/nav';
import Footer from './Components/Footer/footer'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App Site">
          <div className="Site-content">
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
