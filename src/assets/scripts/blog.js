import "./modules/hamburger";
import Vue from "vue";
import preloader from "./modules/preloader";

new Vue({
  el: "#blog",
  beforeMount() {
    preloader();
  },
  methods: {
    formAnimation: function() {
      cosole.log("animation");
      // $('')
    }
  }
});
