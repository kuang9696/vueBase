<template>
  <div>
    <h2>卿卿日常</h2>
    <button @click="count++">点了{{count}}次</button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
        count:0
    }
  }
}
</script>

<style scoped>
h2{
    color: purple;
    font-size: 40px;
}
</style>
