//getFetchData 获取数据方法
// export default {
//     data() {
//         return {
//             fetchData: [],
//             isLoading: true,
//         }
//     },
//     async created() {
//         this.fetchData = await this.getFetchData();
//         this.isLoading = false;
//     },
// }

export default function (defaultDataValue = []) {
    return {
        data() {
            return {
                fetchData: defaultDataValue,
                isLoading: true,
            }
        },
        async created() {
            this.fetchData = await this.getFetchData();
            this.isLoading = false;
        },
    };
}
