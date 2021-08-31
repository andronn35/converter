import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.frankfurter.app/'
})

export const converterAPI = {
  getConversion(amount: number, base: string, rate: string) {
    return instance.get(`latest?amount=${amount}&from=${base}&to=${rate}`)
      .then(response => response.data)
  },
  getRates(base: string, rates: string) {
    return instance.get(`latest?from=${base}&to=${rates}`)
    .then(response => response.data)
  }  
}

