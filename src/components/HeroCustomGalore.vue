<template>
    <!-- Hero Section Begin -->
    <section class="hero-section">
        <carousel class="hero-items" :items='1' :nav='false'>
            <div class="single-hero-items set-bg" style="background-image: url('img/hero-1.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span></span>
                            <h1>Custom Your Own</h1>
                            <p>
                                Do you have a great idea and just need some help getting it was made? 
                                We're here for you! Let your imagination run and choose of any make custom,
                                and we will design a one-of-a-kind for you!
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
                            <h1>Custom Your Own</h1>
                            <p>
                                Do you have a great idea and just need some help getting it was made? 
                                We're here for you! Let your imagination run and choose of any make custom,
                                and we will design a one-of-a-kind for you!
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
                            <h1>Custom Your Own</h1>
                            <p>
                                Do you have a great idea and just need some help getting it was made? 
                                We're here for you! Let your imagination run and choose of any make custom,
                                and we will design a one-of-a-kind for you!
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
import carousel from 'vue-owl-carousel'

export default {
    name: 'HeroCustomGalore',
    components:{
        carousel
    }    
}
</script>