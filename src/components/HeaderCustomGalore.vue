<template>
    <div>
    <!-- Header Section Begin -->
    <header class="header-section">
        <div class="header-top">
            <div class="container">
                <div class="ht-left">
                    <div class="logo">
                    <a href="./index.html">
                        <img src="img/logo_custom_galore.png" alt="" />
                    </a>
                    </div>
                    <div class="float-right">                        
                        <div class="mail-service">
                            <i class=" fa fa-envelope"></i> tasindo.lie@gmail.com
                        </div>
                        <div class="phone-service">
                            <i class=" fa fa-phone"></i> +6287881442513
                        </div>
                    </div>                    
                </div>                
            </div>
        </div>
    </header>
    <!-- Header End -->
    <a href="http://bit.ly/386YuTR">                                 
      <img  src="https://hantamo.com/free/whatsapp.svg" 
            class="wabutton" 
            alt="WhatsApp-Button">
    </a>
    </div>
</template>

<script>
export default {
    name: 'HeaderCustomGalore',
}
</script>

<style scoped>
.logo img {
    max-width: 45%;
    float: left;
}

.float-right {
    padding-top: 40px;
}

.wabutton{
width:80px;
height:80px;
position:fixed;
bottom:20px;
right:20px;
z-index:100;
}
</style>