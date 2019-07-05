import Vue from "vue"

Vue.config.productionTip = false;

if (document.querySelector("#app")) {
    new Vue({
        el: "#app",
        delimiters: ["${", "}"],
        components: {},
        data: {},
        methods: {},
        mounted() {
            console.log("👍 Imported: vue/app.js")
        },
    })
}
