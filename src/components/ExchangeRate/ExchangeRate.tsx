import CustomizedSelects from "../CustomizedSelect/CustomizedSelect"
import classes from './ExchangeRate.module.css'
import equals from '../../img/equals.png'
import USA from '../../img/USA.png'
import EUR from '../../img/EUR.png'
import CHF from '../../img/CHF.png'
import CNY from '../../img/CNY.png'
import RUB from '../../img/RUB.png'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getRates, setBase } from './../../redux/rateReducer';
import { AppStateType } from "../../redux/store"

const ExchangeRate: React.FC = () => {

  const base = useSelector ((state: AppStateType ) => state.ratePage.base)
  const rates = useSelector ((state: AppStateType ) => state.ratePage.rates)
  const ratesResult = useSelector ((state: AppStateType ) => state.ratePage.ratesResult)

  const dispatch = useDispatch()
  useEffect(() => {   
    dispatch(getRates(base, rates))       
  }, [base, rates, dispatch])

  let onChangeBase = (value: any) => {
    dispatch(setBase(value))
  }

  let onChangeAmount = () => {}

  return (
    <div className={classes.rate}>
      <div className={classes.title}>Текущий курс валют</div>
      <div className={classes.selects}>
        <div className={classes.oneSelect}> 
          <CustomizedSelects 
            optionValue={base}
            onSelectChange={onChangeBase}
            inputValue = {1}
            onInputChange={onChangeAmount}
          /> 
        </div>
        <div className={classes.equals}><img src={equals} alt='equals'/></div>
        <div className={classes.currencies}>
          
          <div className={classes.flags}><div><img src={USA} alt='USD'/></div><div>USD {ratesResult.USD}</div></div>
          <div className={classes.flags}><div><img src={EUR} alt='EUR'/></div><div>EUR {ratesResult.EUR}</div></div>          
          <div className={classes.flags}><div><img src={CHF} alt='CHF'/></div><div>CHF {ratesResult.CHF}</div></div>
          <div className={classes.flags}><div><img src={CNY} alt='CNY'/></div><div>CNY {ratesResult.CNY}</div></div>
          <div className={classes.flags}><div><img src={RUB} alt='RUB'/></div><div>RUB {ratesResult.RUB}</div></div>
        </div>
      </div>
    </div>
  )
}

export default ExchangeRate; 