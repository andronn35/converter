import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.frankfurter.app/'
})

export const converterAPI = {
  getConversion(amount: number, base: string, rate: string) {
    return instance.get(`latest?amount=${amount}&from=${base}&to=${rate}`)
      .then(response => response.data)
  },
  getRate(base: string, rate: string) {
    return instance.get(`latest?from=${base}&to=${rate}`)
    .then(response => response.data)
  }  
}

