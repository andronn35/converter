
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import classes from './App.module.css'
import Conversion from './components/Conversion/Conversion'
import Header from './components/Header/Header'
import ExchangeRate from './components/ExchangeRate/ExchangeRate';

function App() {
  return (
    <div className={classes.app}>
      <BrowserRouter>
      <Header />
        <Switch>          
          <Route path='/conversion' exact render={ () => <Conversion /> } />
          <Route path='/rate' exact render={ () => <ExchangeRate /> } />          
        </Switch>
      </BrowserRouter>      
    </div>
  );
}

export default App;
