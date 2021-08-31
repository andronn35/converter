import { converterAPI } from '../api/api'

let GET_RATES_RESULT = "GET_RATES_RESULT";
let SET_BASE = "SET_BASE";

type InitialStateType = typeof initialState
interface IRatesType {
  EUR: number
  CHF: number
  CNY: number
  RUB: number
  USD: number
}

let initialState = {
  base: 'USD',
  rates: 'EUR,CHF,CNY,RUB,USD',
  ratesResult: {} as IRatesType,
}

const rateReducer = (state = initialState, action: any):InitialStateType => {
  switch(action.type) {
    case SET_BASE:
      return {
        ...state,
        base: action.base
      }; 
    case GET_RATES_RESULT:
      return {
        ...state,
        ratesResult: action.ratesResult
      };
    default: return state
  }
}

export const getRatesResult = (ratesResult: object) => ({type: GET_RATES_RESULT, ratesResult})
export const setBase = (base: string) => ({ type: SET_BASE, base })

export const getRates = (base: string, rates: string) => {
  return(dispatch: any) => {    
    converterAPI.getRates(base, rates).then((data:any) => {        
      dispatch(getRatesResult(data.rates))
    })
  }
}
  

export default rateReducer;