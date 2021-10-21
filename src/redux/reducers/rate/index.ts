import { RateAction, RateActionEnum, RateState } from './types';

const initialState: RateState = {
  base: 'USD',
  amount: 1 ,
  rate: 'RUB',
  result: 0 ,
  rateResult: 0,
  reverseResult: 0
}

export default function rateReducer (state = initialState, action: RateAction): RateState {
  switch(action.type) {
    case RateActionEnum.SET_BASE:
      return {
        ...state,
        base: action.payload
      };
    case RateActionEnum.SET_RATE:
      return {
        ...state,
        rate: action.payload
    };
    case RateActionEnum.SET_AMOUNT:
      return {
        ...state,
        amount: action.payload
    }; 
    case RateActionEnum.GET_RESULT:
      return {
        ...state,
        result: action.payload
    }; 
    case RateActionEnum.GET_RATE_RESULT:
      return {
        ...state,
        rateResult: action.payload
    }; 
    case RateActionEnum.GET_REVERSE_RESULT:
      return {
        ...state,
        reverseResult: action.payload
    }; 
    default: return state
  }
}