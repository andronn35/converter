import CustomizedSelects from '../CustomizedSelect/CustomizedSelect'
import classes from './Conversion.module.css'
import arrowR from '../../img/arrowR.png'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/store'
import { getConversion, setAmount, setBase, setRate, getResult } from '../../redux/currencyReducer'
import { useEffect } from 'react'

const Conversion: React.FC = () => {

  const base = useSelector ((state: AppStateType ) => state.currencyPage.base)
  const rate = useSelector ((state: AppStateType ) => state.currencyPage.rate)
  const amount = useSelector ((state: AppStateType ) => state.currencyPage.amount)
  const result = useSelector ((state: AppStateType ) => state.currencyPage.result)
  const dispatch = useDispatch()

  useEffect(() => {    
    if ( base === rate ) {
      amount && dispatch(getResult(amount))
    } else {
      amount && dispatch(getConversion(amount, base, rate))
    }    
  }, [amount, base, rate, dispatch])

  let onChangeBase = (value: any) => {
    dispatch(setBase(value))
  }

  let onChangeRate = (value: any) => {
    dispatch(setRate(value))
  }

  let onChangeAmount = (value: any) => {
    dispatch(setAmount(+value))
  }

  let onChangeResult = () => {}

  return (
    <div className={classes.conversion}>
      <div className={classes.title}>Конвертировать валюту</div>
      <div className={classes.selects}>
        <div className={classes.oneSelect}> 
          <CustomizedSelects 
            optionValue={base}
            inputValue={amount}
            onSelectChange={onChangeBase}
            onInputChange={onChangeAmount}
          /> 
        </div>
        <div className={classes.arrowR}>
          <img src={arrowR} alt='arrowR'/>
        </div>
        <div className={classes.oneSelect}>
          <CustomizedSelects 
            optionValue={rate}
            inputValue={result}
            onSelectChange={onChangeRate}
            onInputChange={onChangeResult}
          /> 
        </div>
      </div>
    </div>
  )
}

export default Conversion; 