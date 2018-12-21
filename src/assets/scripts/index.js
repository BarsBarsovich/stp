import $ from "jquery";
import Vue from "vue";
import preloader from "./modules/preloader";

new Vue({
  el: "#card",
  data: {
    isFront: true
  },
  beforeMount() {
    preloader();
  },
  methods: {
    formAnimation: function() {
      $(".card__front").toggleClass("card__front--active");
      $(".card__back").toggleClass("card__back--active");
      $("#loginButton").hide();
    },
    returnToHome: function(e) {
      e.preventDefault();
      $(".card__front").toggleClass("card__front--active");
      $(".card__back").toggleClass("card__back--active");
      $("#loginButton").show();
    }
  }
});
