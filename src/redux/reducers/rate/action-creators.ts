import { AppDispatch } from "../.."
import { GetRateResultAction, GetResultAction, GetReverseResultAction, RateActionEnum, SetAmountAction, SetBaseAction, SetRateAction } from "./types"
import { converterAPI } from './../../../api/api';

export const RateActionCreators = {
  setBase: (payload: string): SetBaseAction => ({type: RateActionEnum.SET_BASE, payload}),
  setRate: (payload: string): SetRateAction => ({type: RateActionEnum.SET_RATE, payload}),
  setAmount: (payload: number): SetAmountAction => ({type: RateActionEnum.SET_AMOUNT, payload}),
  getResult: (payload: number): GetResultAction => ({type: RateActionEnum.GET_RESULT, payload}),
  getRateResult: (payload: number): GetRateResultAction => ({type: RateActionEnum.GET_RATE_RESULT, payload}),
  getReverseResult: (payload: number): GetReverseResultAction => ({type: RateActionEnum.GET_REVERSE_RESULT, payload}),

  getConversion: (amount: number, base: string, rate: string) => (dispatch: AppDispatch) => {
    converterAPI.getConversion(amount, base, rate).then((data) => {
      dispatch(RateActionCreators.getResult((Number(Object.values(data.rates)))))
    })
  },
  getRate: (base: string, rate: string) => (dispatch: AppDispatch) => {
    converterAPI.getRate(base, rate).then((data) => {
      dispatch(RateActionCreators.getRateResult((Number(Object.values(data.rates)))))
    })
  },
  getReverseRate: (rate: string, base: string) => (dispatch: AppDispatch) => {
    converterAPI.getRate(rate, base).then((data) => {
      dispatch(RateActionCreators.getReverseResult((Number(Object.values(data.rates)))))
    })
  },
}




