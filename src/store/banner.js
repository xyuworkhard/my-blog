import { getBannerList } from "@/api/banner";
export default {
    namespaced: true,
    state: {
        isLoading: true,
        fetchData: []
    },
    mutations: {
        setLoading(state, payload) {
            state.isLoading = payload
        },
        setData(state, payload) {
            state.fetchData = payload
        }
    },
    actions: {
        async fetchBanner(ctx) {
            if (ctx.state.fetchData.length) {
                return
            }
            ctx.commit("setLoading", true)
            const res = await getBannerList()
            ctx.commit("setData", res)
            ctx.commit("setLoading", false)
        }
    }
}