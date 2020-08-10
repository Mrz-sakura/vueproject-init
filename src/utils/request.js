import axios from 'axios';

const service = axios.create({
  baseURL: '',
  method: 'POST'
})

service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
service.interceptors.response.use(
  resp => {
    return resp.data
  },
  err => {
    return Promise.reject(err)
  }
)

export default service
