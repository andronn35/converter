export interface RateState {
  base: string;
  amount: number ;
  rate: string;
  result: number ;
  rateResult: number;
  reverseResult: number
}

export enum RateActionEnum {
  SET_BASE = "SET_BASE",
  SET_AMOUNT = "SET_AMOUNT",
  SET_RATE = "SET_RATE",
  GET_RESULT = "GET_RESULT",
  GET_RATE_RESULT = "GET_RATE_RESULT",
  GET_REVERSE_RESULT = "GET_REVERSE_RESULT"
}

export interface SetBaseAction {
  type: RateActionEnum.SET_BASE;
  payload: string
}
export interface SetAmountAction {
  type: RateActionEnum.SET_AMOUNT;
  payload: number
}
export interface SetRateAction {
  type: RateActionEnum.SET_RATE;
  payload: string
}
export interface GetResultAction {
  type: RateActionEnum.GET_RESULT;
  payload: number
}
export interface GetRateResultAction {
  type: RateActionEnum.GET_RATE_RESULT;
  payload: number
}
export interface GetReverseResultAction {
  type: RateActionEnum.GET_REVERSE_RESULT;
  payload: number
}

export type RateAction = 
  SetBaseAction |
  SetAmountAction |
  SetRateAction |
  GetResultAction |
  GetRateResultAction |
  GetReverseResultAction


