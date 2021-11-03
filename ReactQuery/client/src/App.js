import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Movies from './components/Movies';

const App = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route exact={true} path='/movies' component={Movies} />
      </Switch>
    </div>
  );
};

export default App;
