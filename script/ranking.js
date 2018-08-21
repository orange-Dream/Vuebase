apiready = function(){
new Vue({
    el: "#rankingFrame",
    data: {
        tabs: ["昨日排行", "今日排行", "累计排行"],
        thetabindex: 1,
        ranks: [{
            id: 4,
            img: "../../image/rank/h-img-1.jpg",
            name: "呼吸的落鲸",
            money: 345.92
        }, {
            id: 5,
            img: "../../image/rank/h-img-1.jpg",
            name: "素惊艳",
            money: 1145.92
        }, {
            id: 6,
            img: "../../image/rank/h-img-1.jpg",
            name: "有何不可",
            money: 2245.92
        }, {
            id: 7,
            img: "../../image/rank/h-img-1.jpg",
            name: "呼吸的落鲸",
            money: 345.92
        }, {
            id: 8,
            img: "../../image/rank/h-img-1.jpg",
            name: "素惊艳",
            money: 1145.92
        }, {
            id: 9,
            img: "../../image/rank/h-img-1.jpg",
            name: "有何不可",
            money: 2245.92
        }]
    },
    methods: {
        tothetabindex(index) {
            this.thetabindex = index
        }
    }
})

}
