import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import App from './App';

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default routes;