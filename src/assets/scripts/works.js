import "./modules/hamburger";
import preloader from "./modules/preloader";
import "./modules/slider";
import Vue from "vue";
import $ from "jquery";

new Vue({
  el: "#form__order",
  data: {
    name: "",
    email: "",
    text: "",
    unsucsess: false,
    errorMessage: ""
  },
  beforeMount() {
    preloader();
  },
  methods: {
    checkForm: function(e) {
      console.log("checkForm");
      var errorMessage = "";
      console.log("name" + this.name);

      let nameRequired = this.name == "" ? true : false;
      let emailRequired = this.email == "" ? true : false;
      let textRequired = this.text == "" ? true : false;

      document.getElementById("name").required = nameRequired;
      document.getElementById("email").required = emailRequired;
      document.getElementById("text").required = textRequired;

      this.unsucsess = nameRequired && emailRequired && textRequired;

      if (this.unsucsess) {
        e.preventDefault();
      } else {
        var axios = require("axios");
        axios
          .post("send.php", { data: this.data })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            // Wu oh! Something went wrong
            console.log(error.message);
          });
      }
    },
    submitForm: function() {
      // alert("click");
    },

    resetForm: function() {
      // alert("reset");
    }
  }
});
