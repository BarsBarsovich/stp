import "./modules/skills";
import "./modules/hamburger";
import preloader from "./modules/preloader";
import Vue from "vue";
// import $ from "jquery";

new Vue({
  el: "#form__order",
  beforeMount() {
    preloader();
  },
  methods: {
    checkForm: function() {
      console.log("check");
    },
    submitForm: function() {
      e.preventDefault();
      console.log("smg");
    },
    resetForm: function() {
      e.preventDefault();
      console.log("reset");
    }
  }
});

// new Vue({
//   el: "#map",
//   created() {
//     ymaps.ready(function() {
//       var map = new ymaps.Map("map", {
//         center: [55.76, 37.64],
//         zoom: 7
//       });
//     });
//   }
// });
