import req from '@/request/index'
import qs from "qs"

// const prefix = '/githubRestApi'
const prefix = 'https://api.github.com'

export const getAUser = (username) => {
    return req.get(`${prefix}/users/${username}`)
}