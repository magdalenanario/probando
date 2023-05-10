// file donde va el manejo de la api con axios
import axios from 'axios'

// const url = 'http://localhost:3000/'
const url = 'https://9pnjles2a9.execute-api.us-east-1.amazonaws.com/dev/'

async function axiosRequestInterceptor (config) {
  const token = localStorage.getItem('token')
  if (token) {
    // We have an interceptor that MUST modify the config argument, that's why we need to disable
    // the error from eslint.
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`
    // config.headers['Content-Type'] = 'application/json'
    // config.headers['Access-Control-Allow-Origin'] = '*'
  }

  return config
}

const api = axios.create({ baseURL: url })

api.interceptors.request.use(axiosRequestInterceptor)

export default api
