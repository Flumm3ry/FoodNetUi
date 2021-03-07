import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/routes/home';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          path="/"
          component={Home}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
