import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  iconfont: "md",
  theme: {
    themes: {
      light: {
        primary: "#000",
        secondary: "#fff",
        accent: "#b0bec5",
        error: "#b71c1c",
      },
    },
  },
});
