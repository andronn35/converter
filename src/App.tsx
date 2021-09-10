import classes from './App.module.css'
import ExchangeRate from './components/ExchangeRate/ExchangeRate';

function App() {
  return (
    <div className={classes.app}>
      <ExchangeRate />
    </div>
  );
}

export default App;
