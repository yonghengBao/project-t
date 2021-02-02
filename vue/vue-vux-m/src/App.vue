<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
    import {Loading} from 'vux'

    export default {
        name: 'App',
        components: {
            Loading
        },
        data: function () {
            return {}
        },
        created() {
            this.setDeviceWidth();
        },
        mounted() {
            window.onresize = () => {
                return (() => {
                    this.setDeviceWidth();
                })();
            };
        },
        methods: {
            setDeviceWidth() {
                let deviceWidth = document.documentElement.clientWidth;
                document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
            }
        }
    }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  .slide-enter-active, .slide-leave-active {
    transition: opacity .5s;
  }

  .slide-enter, .slide-leave-to {
    opacity: 0;
  }
</style>
