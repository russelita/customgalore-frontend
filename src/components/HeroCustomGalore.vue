<template>
  <!-- Hero Section Begin -->
  <section class="hero-section">
    <carousel class="hero-items" :items="1" :nav="false">
      <div class="single-hero-items set-bg" style="background-image: url('img/hero-1.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span></span>
              <h1>
                Custom Your Own
                <br />Buat yang kamu inginkan
              </h1>
              <p>
                Do you have a great idea and just need some help getting it was made?
                We are here for you! Let your imagination run we will design according to your wishes!
                <br />Apakah Anda punya ide bagus dan membutuhkan bantuan untuk membuatnya?
                Kami di sini untuk Anda! Biarkan imajinasi Anda berjalan kami akan merancang sesuai keinginan Anda!
              </p>
              <a href="http://bit.ly/386YuTR" class="primary-btn">Chat Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="single-hero-items set-bg" style="background-image: url('img/hero-2.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span></span>
              <h1>
                Custom Your Own
                <br />Buat yang kamu inginkan
              </h1>
              <p>
                Do you have a great idea and just need some help getting it was made?
                We are here for you! Let your imagination run we will design according to your wishes!
                <br />Kami di sini untuk Anda! Biarkan imajinasi Anda berjalan kami akan merancang sesuai keinginan Anda!
              </p>
              <a href="http://bit.ly/386YuTR" class="primary-btn">Chat Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="single-hero-items set-bg" style="background-image: url('img/hero-3.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span></span>
              <h1>
                Custom Your Own
                <br />Buat yang kamu inginkan
              </h1>
              <p>
                Do you have a great idea and just need some help getting it was made?
                We are here for you! Let your imagination run we will design according to your wishes!
                <br />Kami di sini untuk Anda! Biarkan imajinasi Anda berjalan kami akan merancang sesuai keinginan Anda!
              </p>
              <a href="http://bit.ly/386YuTR" class="primary-btn">Chat Now</a>
            </div>
          </div>
        </div>
      </div>
    </carousel>
  </section>
  <!-- Hero Section End -->
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "HeroCustomGalore",
  components: {
    carousel
  }
};
</script>

<style scoped>
.hero-items h1 {
  font-size: 45px;
}
.single-hero-items {
  padding-top: 110px;
}
</style>