<template>
  <!-- Footer Section Begin -->
  <footer class="footer-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="footer-left text-left">
            <div class="footer-logo">
              <a href="#">
                <img src="img/logo_custom_galore_white.png" alt />
              </a>
            </div>
            <ul>
              <li>Address: Harco Mangga Dua Blok B no.22, Jakarta</li>
              <li>Phone: +6287881442513</li>
              <li>Email: tasindo.lie@gmail.com</li>
            </ul>
            <div class="footer-social">
              <a href="mailto:tasindo.lie@gmail.com" style="margin-right:15px;">
                <i class="fa fa-envelope"></i>
              </a>
              <a href="https://www.instagram.com/sentosa_tasindo/" style="margin-right:15px;">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="tel:+6287881442513" style="margin-right:15px;">
                <i class="fa fa-phone"></i>
              </a>
              <a href="http://bit.ly/386YuTR">
                <i class="fa fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-reserved">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="copyright-text">
              Copyright &copy;
              2020
              <a
                href="customgaloreindonesia.com"
              >Custom Galore Project</a> | All Rights Reserved
            </div>
          </div>
          <ul class="list-unstyled list-inline text-right mx-auto w-100">
            <li class="list-inline-item">
              <router-link to="/privacy">Privacy Policy</router-link>
            </li>
            <li class="list-inline-item">
              <router-link to="/termofservices">Term Of Services</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Section End -->
</template>

<script>
export default {
  name: "FooterCustomGalore"
};
</script>

<style scoped>
.footer-logo img {
  width: 400px;
  min-height: 100px;
}
.footer-left ul li {
  font-size: 21px;
  font-family: "Didact Gothic", sans-serif;
}
.copyright-reserved .copyright-text {
  font-family: "Didact Gothic", sans-serif;
}
a {
  color: #b2b2b2;
}
</style>