<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter/>
    <ContadorCuadrado/>
    <Botones/>
    <ColorCode/>
  </div>
</template>

<script>
import Counter from "../components/Counter.vue";
import ContadorCuadrado from "../components/ContadorCuadrado.vue";
import Botones from "../components/Botones.vue";
import ColorCode from "../components/ColorCode.vue";

export default {

  name: 'HomeView',
  
  components:{
    Counter,
    ContadorCuadrado,
    Botones,
    ColorCode
  }
}
</script>

<style>
div{
  margin-bottom: 10px;
}

.counter{
  font-size: 80px;
}

.buttons button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
