import {
    getSetting
} from "@/api/settings";
import {
    titleController
} from "@/utils";
export default {
    namespaced: true,
    state: {
        isLoading: false,
        fetchData: null,
    },
    mutations: {
        setLoading(state, payload) {
            state.isLoading = payload;
        },
        setData(state, payload) {
            state.fetchData = payload;
        },
    },
    actions: {
        async fetchSetting(ctx) {
            ctx.commit("setLoading", true);
            const resp = await getSetting();
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
            if (resp.favicon) {
                // <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">
                let link = document.querySelector("link[ref='shortcut icon']");
                if (link) {
                    return;
                }
                link = document.createElement("link");
                link.rel = "shortcut icon";
                link.type = "images/x-icon";
                link.href = resp.favicon;
                document.querySelector("head").appendChild(link);
            }
            if (resp.siteTitle) {
                titleController.setSiteTitle(resp.siteTitle);
            }
        },
    },
};