<template>
  <!-- Hero Section Begin -->
  <section class="hero-section">
    <carousel class="hero-items" :items="1" :nav="false" :autoplay="true" :autoplayTimeout="12000">
      <div class="single-hero-items set-bg" style="background-image: url('img/hero-1.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-8">
              <span></span>
              <h1>Custom Corporate Gift</h1>
              <h2>Gimmick Perusahaan Dengan Corporate Color</h2>
              <p style="font-style:italic; color:#800000; margin-bottom:15px;">
                Bored with black, blue, brown, red gimmick?
                Our Custom Gallore Project is here to answer your needs.
                Whatever the design and color of your company identity, we are able to present it.
              </p>
              <p>
                Bosan dengan gimmick hitam, biru, coklat, merah?
                Kami Custom Gallore Project hadir untuk menjawab kebutuhan anda.
                Apapun design dan warna identitas perusahaan anda, kami mampu hadirkan.
              </p>
              <a href="http://bit.ly/386YuTR" class="primary-btn">Chat Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="single-hero-items set-bg" style="background-image: url('img/hero-2.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-8">
              <span></span>
              <h1>Custom Corporate Gift</h1>
              <h2>Gimmick Perusahaan Dengan Corporate Color</h2>
              <p style="font-style:italic; color:#800000; margin-bottom:15px;">
                Bored with black, blue, brown, red gimmick?
                Our Custom Gallore Project is here to answer your needs.
                Whatever the design and color of your company identity, we are able to present it.
              </p>
              <p>
                Bosan dengan gimmick hitam, biru, coklat, merah?
                Kami Custom Gallore Project hadir untuk menjawab kebutuhan anda.
                Apapun design dan warna identitas perusahaan anda, kami mampu hadirkan.
              </p>
              <a href="http://bit.ly/386YuTR" class="primary-btn">Chat Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="single-hero-items set-bg" style="background-image: url('img/hero-3.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-8">
              <span></span>
              <h1>Custom Corporate Gift</h1>
              <h2>Gimmick Perusahaan Dengan Corporate Color</h2>
              <p style="font-style:italic; color:#800000; margin-bottom:15px;">
                Bored with black, blue, brown, red gimmick?
                Our Custom Gallore Project is here to answer your needs.
                Whatever the design and color of your company identity, we are able to present it.
              </p>
              <p>
                Bosan dengan gimmick hitam, biru, coklat, merah?
                Kami Custom Gallore Project hadir untuk menjawab kebutuhan anda.
                Apapun design dan warna identitas perusahaan anda, kami mampu hadirkan.
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
  font-weight: bolder;
  font-style: italic;
  color: #800000;
}
.hero-items h2 {
  margin-bottom: 15px;
  color: #000;
}
.single-hero-items {
  padding-top: 110px;
}
</style>