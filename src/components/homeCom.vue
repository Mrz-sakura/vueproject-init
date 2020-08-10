<template>
  <div @click="handleClick">我是组件的BUTTON</div>
</template>

<script>
  import Event from "@/class/EventEmitter";

  export default {
    name: "homeCom",
    methods: {
      handleClick() {
        Event.emit('click', 'mysql1')
      }
    }
  }
</script>

<style scoped>

</style>
