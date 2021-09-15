import Vue from 'vue'
import App from './App.vue'
import ScrollAnimation from './directives/scrollAnimation'
Vue.directive('scrollanimation', ScrollAnimation)

Vue.config.productionTip = false

new Vue({
  components: {

  },
  render: h => h(App),
}).$mount('#app')

