import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import "./assets/style/anim.css";
// ルーティングのために追加
import router from "../router";

const app = createApp(App);
app.use(router);
app.mount("#app");
