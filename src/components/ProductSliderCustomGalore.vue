<template>
    <!-- Women Banner Section Begin -->
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5" v-if="products && products.length > 0">
                    <carousel class="product-slider" :nav='false' :items='3' :dots='false' :autoplay='true'>
                        
                        <div class="product-item" v-for="itemProduct in products" :key="itemProduct.id">
                            <div class="pi-pic">
                                <img v-bind:src="itemProduct.galleries[0].photo" alt/>
                                <ul>
                                    <li class="quick-view"><router-link v-bind:to="'/product/'+itemProduct.id">+ Quick View</router-link></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <router-link v-bind:to="'/product/'+itemProduct.id">
                                    <div class="catagory-name">{{ itemProduct.type }}</div>
                                </router-link>
                                <router-link v-bind:to="'/product/'+itemProduct.id">
                                    <h5>Custom Example</h5>
                                </router-link>
                            </div>
                        </div>

                    </carousel>
                </div>

                <div class="col-lg-12" v-else>
                    <p>
                        Data tidak ditemukan
                    </p>
                </div>


            </div>
        </div>
    </section>
    <!-- Women Banner Section End -->
</template>

<script>
import carousel from 'vue-owl-carousel'
import axios from 'axios'

export default {
    name: 'ProductSliderCustomGalore',
    components:{
        carousel
    },    
    data() {
        return {
            products:[]
        }
    },
    mounted() {
        axios
            .get('http://customgaloreindonesia.com/api/products')
            .then(res =>  (this.products = res.data.data.data))
            // eslint-disable-next-line no-console
            .catch(err => console.log(err));
    }
};
</script>

<style scoped>
.product-item{
  margin-right: 25px;
}

.pi-pic{
    max-height: 278px;
}
</style>