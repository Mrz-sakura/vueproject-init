<template>
  <div class="home">
    <button @click="handleClick">惦记我</button>
    <homeCom></homeCom>
  </div>
</template>

<script>
import Event from '@/class/EventEmitter'
import homeCom from "@com/homeCom";

export default {
  components: {homeCom},
  mounted() {
    // dd.ready(function () {
    //   // dd.ready参数为回调函数，在环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
    //   dd.runtime.permission.requestAuthCode({
    //     corpId: "corpid",
    //     onSuccess: function (result) {
    //       /*{
    //           code: 'hYLK98jkf0m' //string authCode
    //       }*/
    //     },
    //     onFail: function (err) {}
    //
    //   });
    // });
    Event.on('click', 'HomeClick', (...args) => {
      console.log(...args)
    })
  },
  methods: {
    handleClick() {
      Event.emit('click', 'mysql')
    }
  }
}
</script>
