import req from './index'
import qs from "qs"

export const xx = (username) => {
    return req.put('/api/user/updateUsername', qs.stringify({
        username
    }))
}