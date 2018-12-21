import Vue from "vue";
import $ from "jquery";

new Vue({
  el: "#hamburger",
  data: {
    active: false
  },
  methods: {
    changeCaption: function() {
      console.log("zae");
      this.active = !this.active;
      // $(".card__back").toggleClass("card__back--active");
      $("#fullscreen").toggleClass("fullscreen--active");
    }
  }
});
