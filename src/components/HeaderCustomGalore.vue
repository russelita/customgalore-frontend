<template>
  <div>
    <!-- Header Section Begin -->
    <header class="header-section">
      <div class="container">
        <div class="inner-header">
          <div class="row">
            <div class="col-md-12">
              <div class="logo">
                <router-link to="/">
                  <a href="#">
                    <img src="img/logo_custom_galore.png" alt />
                  </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-top">
        <div class="container">
          <div class="col-lg-6 col-md-10">
            <div class="ht-left">
              <div class="mail-service">
                <i class="fa fa-envelope"></i> tasindo.lie@gmail.com
              </div>
              <div class="phone-service">
                <i class="fa fa-phone"></i> +6287881442513
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Header End -->
    <a href="https://bit.ly/2QGpfc1">
      <img src="https://hantamo.com/free/whatsapp.svg" class="wabutton" alt="WhatsApp-Button" />
    </a>
  </div>
</template>

<script>
export default {
  name: "HeaderCustomGalore"
};
</script>

<style scoped>
.logo img {
  max-width: 100%;
  float: left;
}

.float-right {
  padding-top: 40px;
}

.wabutton {
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
}
.header-top {
  font-family: "Didact Gothic", sans-serif;
}
</style>