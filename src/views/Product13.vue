<template>
  <div class="product13">
    <HeaderCustomGalore />
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section text-left">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text product-more">
              <router-link to="/">
                <i class="fa fa-home"></i> Home
              </router-link>
              <span>Detail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="product-pic-zoom">
                  <img class="product-big-img" :src="gambar_default" alt />
                </div>
                <div class="product-thumbs">
                  <carousel
                    class="product-thumbs-track ps-slider"
                    :dots="false"
                    :nav="false"
                    :autoplay="false"
                  >
                    <div
                      class="pt"
                      @click="changeImage(thumbs[0])"
                      :class="thumbs[0] == gambar_default ? 'active' : '' "
                    >
                      <img src="img/Masker Bahan Scuba.jpg" alt />
                    </div>
                  </carousel>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-details text-left">
                  <div class="pd-title">
                    <span>custom example</span>
                    <h3>Jasa Laser Masker</h3>
                  </div>
                  <div class="quantity">
                    <a href="tel:+62811188770" class="primary-btn pd-cart">Call Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->
    <!-- <RelatedProductCustomGalore/> -->
    <FooterCustomGalore />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderCustomGalore from "@/components/HeaderCustomGalore.vue";
import FooterCustomGalore from "@/components/FooterCustomGalore.vue";
import carousel from "vue-owl-carousel";
// import RelatedProductCustomGalore from '@/components/RelatedProductCustomGalore.vue'

export default {
  name: "product",
  components: {
    HeaderCustomGalore,
    FooterCustomGalore,
    // RelatedProductCustomGalore,
    carousel
  },
  data() {
    return {
      gambar_default: "img/jpg/Masker Bahan Scuba.jpg",
      thumbs: ["img/jpg/Masker Bahan Scuba.jpg"]
    };
  },
  methods: {
    changeImage(urlImage) {
      this.gambar_default = urlImage;
    }
  }
};
</script>

<style scoped>
.product-thumbs .pt {
  margin-right: 14px;
}
.product-details h3 {
  color: #800000;
  font-style: italic;
}
.pt {
  max-height: 171px;
}
</style>