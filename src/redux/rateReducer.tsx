import { converterAPI } from '../api/api'

let SET_BASE = "SET_BASE";
let SET_AMOUNT = "SET_AMOUNT";
let SET_RATE = "SET_RATE";
let GET_RESULT = "GET_RESULT";
let GET_RATE_RESULT = "GET_RATE_RESULT";
let GET_REVERSE_RESULT = "GET_REVERSE_RESULT";

type InitialStateType = typeof initialState

let initialState = {
  base: 'USD',
  amount: 1 ,
  rate: 'RUB',
  result: 0 ,
  rateResult: 0,
  reverseResult: 0
}

const rateReducer = (state = initialState, action: any):InitialStateType => {
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
    case GET_RATE_RESULT:
      return {
        ...state,
        rateResult: action.rateResult
    }; 
    case GET_REVERSE_RESULT:
      return {
        ...state,
        reverseResult: action.reverseResult
    }; 
    default: return state
  }
}

export const setBase = (base: string) => ({ type: SET_BASE, base })
export const setRate = (rate: string) => ({ type: SET_RATE, rate })
export const setAmount = (amount: number) => ({ type: SET_AMOUNT, amount })
export const getResult = (result: number) => ({ type: GET_RESULT, result })
export const getRateResult = (rateResult: number) => ({ type: GET_RATE_RESULT, rateResult })
export const getReverseResult = (reverseResult: number) => ({ type: GET_REVERSE_RESULT, reverseResult })

export const getConversion = (amount: number, base: string, rate: string) => {
  return(dispatch: any) => {    
    converterAPI.getConversion(amount, base, rate).then((data:any) => {       
      dispatch(getResult(Number(Object.values(data.rates))))
    })
  }
}

export const getRate = (base: string, rate: string) => {
  return(dispatch: any) => {    
    converterAPI.getRate(base, rate).then((data:any) => {       
      dispatch(getRateResult(Number(Object.values(data.rates))))
    })
  }
}

export const getReverseRate = (rate: string, base: string) => {
  return(dispatch: any) => {    
    converterAPI.getRate(rate, base).then((data:any) => {       
      dispatch(getReverseResult(Number(Object.values(data.rates))))
    })
  }
}
  

export default rateReducer;



