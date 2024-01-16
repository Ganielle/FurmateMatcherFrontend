<template>
  <footer class="bg-light footer-component-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 text-center my-auto">
          <img :src="logo" class="logo-footer img-fluid" alt="" />
        </div>
        <div class="col-lg-6">
          <h5>About us</h5>
          <hr class="small-divider left">
          <p class="mt-3">This website is created for thesis purposes only.</p>
        </div>
        <div class="col-lg-3">
          <h5>Contact Us</h5>
          <hr class="small-divider left">
          <ul class="list-unstyled mt-3">
            <li class="mb-1">
              <i class="fas fa-envelope margin-icon"></i>
              <a href="mailto:furmatematcher@gmail.com" style="color: white;">furmatematcher@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="credits col-sm-12 text-center">
          <p>
            Copyright ©2024 All rights reserved
            <a href="/termsandcondition" class="footer-items" style="color: white;">Terms & Conditions</a> |
            <a href="/faq" class="footer-items" style="color: white;">About Us</a>
          </p>
          <br/>
        </div>
      </div>
    </div>

    <!-- Background Pattern -->
    <div class="pattern1"></div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";
import logo from "@/assets/logo1.png";
import footer from "@/assets/patterns/pattern1.png";

export default defineComponent({
  name: "FooterComponent2",
  data() {
    return {
      logo,
      footer,
    };
  },
});
</script>

<style>
.footer-component-2 {
  color: white;
  padding: 80px 0px;
}

.bg-light {
  background-color: purple!important;
}

.pattern1 {
  width: 100%;
  height: 100px; /* Adjust the height as needed */
  margin-top: 20px; /* Adjust the margin-top as needed */
  background-image: url('@/assets/patterns/pattern1.png');
  background-position: center bottom;
  background-repeat: repeat-x;
}

.footer-component-2 hr.small-divider {
  content: ' ';
  display: block;
  width: 60px;
  margin: 10px auto;
  border: 1px solid #cecece;
  -moz-border-radius: 4px;
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
}

.footer-component-2 hr.small-divider.left {
  margin-left:0px;
}

.footer-component-2 .margin-icon {
  margin-right: 10px;  
}

.footer-component-2 p {
  color: white;
}



@media (max-width: 767px) {
  footer {
    padding: 10px 0 !important;
  }
}
</style>
