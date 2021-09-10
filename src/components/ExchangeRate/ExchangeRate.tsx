
import classes from './ExchangeRate.module.css'
import equals from '../../img/equals.png'
import USA from '../../img/USA.png'
import EUR from '../../img/EUR.png'
import CHF from '../../img/CHF.png'
import CNY from '../../img/CNY.png'
import RUB from '../../img/RUB.png'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getConversion, getResult, setAmount, setBase, setRate, getRate, getReverseRate, getRateResult, getReverseResult } from './../../redux/rateReducer';
import { AppStateType } from "../../redux/store"

const ExchangeRate: React.FC = () => {

  const [activeB, setActiveB] = useState('USD');
  const [activeR, setActiveR] = useState('RUB');
  const base = useSelector ((state: AppStateType ) => state.ratePage.base)
  const rate = useSelector ((state: AppStateType ) => state.ratePage.rate)
  const amount = useSelector ((state: AppStateType ) => state.ratePage.amount)
  const result = useSelector ((state: AppStateType ) => state.ratePage.result)
  const rateResult = useSelector ((state: AppStateType ) => state.ratePage.rateResult)
  const reverseResult = useSelector ((state: AppStateType ) => state.ratePage.reverseResult)
  const dispatch = useDispatch()

  useEffect(() => {    
    if ( base === rate ) {
      amount && dispatch(getResult(amount))
    } else {
      amount && dispatch(getConversion(amount, base, rate))
    }    
  }, [amount, base, rate, dispatch])

  useEffect(() => {
    if ( base === rate ) {
      dispatch(getRateResult(1))
    } else {
      dispatch(getRate(base, rate))
    }
  }, [base, rate, dispatch])


  useEffect(() => {
    if ( base === rate ) {
      dispatch(getReverseResult(1))
    } else {
      dispatch(getReverseRate(rate, base))
    }
  }, [base, rate, dispatch])    

  let onChangeBase = (e: any) => {
    dispatch(setBase(e.target.textContent))
  }

  let onChangeRate = (e: any) => {
    dispatch(setRate(e.target.textContent))
  }

  let onChangeAmount = (e: any) => {
    dispatch(setAmount(e.target.value))
  }

  return (
    <div className={classes.rate}>
      <div className={classes.title}>Текущий курс валют</div>
      <div className={classes.blocks}>
        <div className={classes.have}> 
          <div className={classes.currency}>
            
            <div className={(activeB === 'USD' && classes.active) || classes.oneCurrency} 
            onClick={(e) => {onChangeBase(e); setActiveB('USD')}}><img src={USA} alt='img'/><span>USD</span></div>
            <div className={(activeB === 'EUR' && classes.active) || classes.oneCurrency} 
            onClick={(e) => {onChangeBase(e); setActiveB('EUR')}}><img src={EUR} alt='img'/><span>EUR</span></div>
            <div className={(activeB === 'CHF' && classes.active) || classes.oneCurrency} 
            onClick={(e) => {onChangeBase(e); setActiveB('CHF')}}><img src={CHF} alt='img'/><span>CHF</span></div>
            <div className={(activeB === 'CNY' && classes.active) || classes.oneCurrency} 
            onClick={(e) => {onChangeBase(e); setActiveB('CNY')}}><img src={CNY} alt='img'/><span>CNY</span></div>
            <div className={(activeB === 'RUB' && classes.active) || classes.oneCurrency} 
            onClick={(e) => {onChangeBase(e); setActiveB('RUB')}}><img src={RUB} alt='img'/><span>RUB</span></div>
          </div>
          <div className={classes.currencyValue}>
            <input onChange={onChangeAmount} value={amount} type='number'/>
            <div className={classes.oneRate}> {1} {base} = {rateResult} {rate}</div>
          </div>
        </div>
        <div className={classes.equals}><img src={equals} alt='equals'/></div>
        <div className={classes.want}> 
          <div className={classes.currency}>
            <div className={(activeR === 'USD' && classes.active) || classes.oneCurrency} 
            onClick={(e) => {onChangeRate(e); setActiveR('USD')}}><img src={USA} alt='img'/><span>USD</span></div>
            <div className={(activeR === 'EUR' && classes.active) || classes.oneCurrency} 
            onClick={(e) => {onChangeRate(e); setActiveR('EUR')}}><img src={EUR} alt='img'/><span>EUR</span></div>
            <div className={(activeR === 'CHF' && classes.active) || classes.oneCurrency} 
            onClick={(e) => {onChangeRate(e); setActiveR('CHF')}}><img src={CHF} alt='img'/><span>CHF</span></div>
            <div className={(activeR === 'CNY' && classes.active) || classes.oneCurrency} 
            onClick={(e) => {onChangeRate(e); setActiveR('CNY')}}><img src={CNY} alt='img'/><span>CNY</span></div>
            <div className={(activeR === 'RUB' && classes.active) || classes.oneCurrency} 
            onClick={(e) => {onChangeRate(e); setActiveR('RUB')}}><img src={RUB} alt='img'/><span>RUB</span></div>
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


