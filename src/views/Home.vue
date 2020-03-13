<template>
  <div class="home">
    <HeaderCustomGalore/>
    <HeroCustomGalore/>
    <ProductSliderCustomGalore/>
    <InstaCustomGalore/>
    <FooterCustomGalore/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderCustomGalore from '@/components/HeaderCustomGalore.vue'
import HeroCustomGalore from '@/components/HeroCustomGalore.vue'
import ProductSliderCustomGalore from '@/components/ProductSliderCustomGalore.vue'
import InstaCustomGalore from '@/components/InstaCustomGalore.vue'
import FooterCustomGalore from '@/components/FooterCustomGalore.vue'

export default {
  name: 'Home',
  components: {
    HeaderCustomGalore,
    HeroCustomGalore,
    ProductSliderCustomGalore,
    InstaCustomGalore,
    FooterCustomGalore    
  }
}
</script>