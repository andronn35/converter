import classes from './ExchangeRate.module.css'
import equals from '../../img/equals.png'
import USD from '../../img/USA.png'
import EUR from '../../img/EUR.png'
import CHF from '../../img/CHF.png'
import CNY from '../../img/CNY.png'
import RUB from '../../img/RUB.png'
import { useEffect, useState } from 'react';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import { useActions } from './../../hooks/useActions';

const ExchangeRate: React.FC = () => {

  const [activeB, setActiveB] = useState('USD');
  const [activeR, setActiveR] = useState('RUB');

  const {base, rate, amount, result, rateResult, reverseResult} = useTypedSelector(state => state.rate)
  const {getResult, getConversion, getRateResult, getRate, getReverseResult, getReverseRate, setBase, setRate, setAmount} = useActions()

  useEffect(() => {    
    if ( base === rate ) {
      amount && getResult(amount)
    } else {
      amount && getConversion(amount, base, rate)
    }    
  }, [amount, base, rate])

  useEffect(() => {
    if ( base === rate ) {
      getRateResult(1)
    } else {
      getRate(base, rate)
    }
  }, [base, rate])


  useEffect(() => {
    if ( base === rate ) {
      getReverseResult(1)
    } else {
      getReverseRate(rate, base)
    }
  }, [base, rate])    

  let onChangeBase = (e: any) => {
    setBase(e.target.textContent)
  }

  let onChangeRate = (e: any) => {
    setRate(e.target.textContent)
  }

  let onChangeAmount = (e: any) => {
    setAmount(e.target.value)
  }

  let currencies = [USD, EUR, CHF, CNY, RUB]
  let currenciName = (currenci: any) => {
    switch(currenci) {
      case USD: return ('USD')
      case EUR: return ('EUR')
      case CHF: return ('CHF')
      case CNY: return ('CNY')
      case RUB: return ('RUB')
      default: return ('RUB')
    }
  }

  let showCurrencies = currencies.map((item, index) =>
    <div key={index} className={(activeB === currenciName(item) && classes.active) || classes.oneCurrency} 
      onClick={(e) => {onChangeBase(e); setActiveB(currenciName(item))}}>
      <img src={item} alt='img'/>
      <span>{currenciName(item)}</span>
    </div>
  )

  let showCurrenciesB = currencies.map((item, index) =>
    <div key={index} className={(activeR === currenciName(item) && classes.active) || classes.oneCurrency} 
      onClick={(e) => {onChangeRate(e); setActiveR(currenciName(item))}}>
      <img src={item} alt='img'/>
      <span>{currenciName(item)}</span>
    </div>
  )

  return (
    <div className={classes.rate}>
      <div className={classes.title}>Текущий курс валют</div>
      <div className={classes.blocks}>
        <div className={classes.have}> 
          <div className={classes.currency}>
            {showCurrencies}
          </div>
          <div className={classes.currencyValue}>
            <input onChange={onChangeAmount} value={amount} type='number'/>
            <div className={classes.oneRate}> {1} {base} = {rateResult} {rate}</div>
          </div>
        </div>
        <div className={classes.equals}><img src={equals} alt='equals'/></div>
        <div className={classes.want}> 
          <div className={classes.currency}>
            {showCurrenciesB}
          </div>
          <div className={classes.currencyValue}>
            <input readOnly  value={result}/>
            <div className={classes.oneRate}> 1 {activeR} = {reverseResult} {activeB}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExchangeRate; 


