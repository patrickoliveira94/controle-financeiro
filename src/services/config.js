import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://api.hgbrasil.com/finance/quotations?format=json-cors&key=dfdf5a27'
})
