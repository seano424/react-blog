import axios from 'axios'

const axios = () => {
  return (
    axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com'
    })
  )
}

export default axios;