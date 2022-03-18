<template>
    <div :style={color:$store.state.color} class="counter">
      {{ $store.state.counter }}
    </div>
</template>

<script>

export default {
  name: 'Counter'
}
</script>
