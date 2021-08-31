import { converterAPI } from '../api/api'

let SET_BASE = "SET_BASE";
let SET_AMOUNT = "SET_AMOUNT";
let SET_RATE = "SET_RATE";
let GET_RESULT = "GET_RESULT"

type InitialStateType = typeof initialState

let initialState = {
  base: 'EUR',
  amount: 1 ,
  rate: 'RUB',
  result: 0
}

const currencyReducer = (state = initialState, action: any):InitialStateType => {
  switch(action.type) {
    case SET_BASE:
      return {
        ...state,
        base: action.base
      };
    case SET_RATE:
      return {
        ...state,
        rate: action.rate
    };
    case SET_AMOUNT:
      return {
        ...state,
        amount: action.amount
    }; 
    case GET_RESULT:
      return {
        ...state,
        result: action.result
    }; 
    default: return state
  }
}

export const setBase = (base: string) => ({ type: SET_BASE, base })
export const setRate = (rate: string) => ({ type: SET_RATE, rate })
export const setAmount = (amount: number) => ({ type: SET_AMOUNT, amount })
export const getResult = (result: number) => ({ type: GET_RESULT, result })

export const getConversion = (amount: number, base: string, rate: string) => {
  return(dispatch: any) => {    
    converterAPI.getConversion(amount, base, rate).then((data:any) => {       
      dispatch(getResult(Number(Object.values(data.rates))))
    })
  }
}
  

export default currencyReducer;