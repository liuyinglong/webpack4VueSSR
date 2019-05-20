import Vue from "vue"
import App from "./App.vue"


export let app = new Vue({
    render(createElement) {
        return createElement(App)
    }
})