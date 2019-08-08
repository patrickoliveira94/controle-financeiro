import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://api.hgbrasil.com/finance/quotations?key=04b8901a'
})
