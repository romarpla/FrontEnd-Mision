<template>
    <div class="counterSquare">
      {{ $store.state.counter }}
      <sup>2</sup> = {{ $store.getters.contadorCuadrado }}
    </div>
</template>

<script>

export default {
  name: 'ContadorCuadrado'
}
</script>
