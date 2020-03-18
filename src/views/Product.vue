<template>
  <div class="product">
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
                <div class="product-thumbs" v-if="productDetails.galleries.length > 0">
                  <carousel class="product-thumbs-track ps-slider" :dots="false" :nav="false">
                    <div
                      v-for="ss in productDetails.galleries"
                      :key="ss.id"
                      class="pt"
                      @click="changeImage(ss.photo)"
                      :class="ss.photo == gambar_default ? 'active' : '' "
                    >
                      <img :src="ss.photo" alt />
                    </div>
                  </carousel>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-details text-left">
                  <div class="pd-title">
                    <span>custom example</span>
                    <h3>{{ productDetails.type }}</h3>
                  </div>
                  <div class="quantity">
                    <a href="http://bit.ly/386YuTR" class="primary-btn pd-cart">Chat now</a>
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
import axios from "axios";

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
      gambar_default: "",
      thumbs: [
        "img/mickey1.jpg",
        "img/mickey2.jpg",
        "img/mickey3.jpg",
        "img/mickey4.jpg"
      ],
      productDetails: []
    };
  },
  methods: {
    changeImage(urlImage) {
      this.gambar_default = urlImage;
    },

    setDataPicture(data) {
      //   replace object productDetails dengan data dari API
      this.productDetails = data;
      // replace value gambar default dengan data dari API (galleries)
      this.gambar_default = data.galleries[0].photo;
    }
  },
  mounted() {
    axios
      .get("//customgaloreindonesia.com/api/products", {
        params: {
          id: this.$route.params.id
        }
      })
      .then(res => this.setDataPicture(res.data.data))
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.product-thumbs .pt {
  margin-right: 14px;
}
.pt {
  max-height: 100px;
}
</style>