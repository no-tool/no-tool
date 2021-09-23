import storage from "good-storage"
import {storageConstant} from "@/common/storage-constant"

const state = () => ({
    user: storage.get(storageConstant.LOGGED_IN_USER, null)
})

const getters = {}

const actions = {
    refreshUserInfo(context) {
        context.state.user = storage.get(storageConstant.LOGGED_IN_USER, null)
    }
}

const mutations = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}