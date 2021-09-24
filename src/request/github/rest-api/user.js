import req from '@/request/index'
import qs from "qs"

export const getAUser = (username) => {
    return req.get(`/githubRestApi/users/${username}`)
}