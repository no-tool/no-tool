import axios from 'axios'

const service = axios.create({
    baseURL: process.env.BASE_API
})

service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

// service.interceptors.response.use(
//     response => {
//         const data = response.data
//         if (data.success) {
//             return data.data
//         } else {
//             return Promise.reject(data.message)
//         }
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )

service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default service