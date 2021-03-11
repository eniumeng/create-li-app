import './public-path'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let vm = null

function render (props = {}) {
  const { container } = props

  /* eslint-disable no-new */
  vm = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap () {
  console.log('vue app bootstraped')
  // document.body.innerHTML = 'loading'
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount (props) {
  // ReactDOM.render(<App />, props.container ? props.container.querySelector('#root') : document.getElementById('root'));
  console.log(props)

  props.fns.headerChange({
    app: 'liui',
    logo: '<img src="https://p.ampmake.com/fed/image/png/b02576cc35237f3a666b5d764b762c6e.png" style="height: 20px;" /><span style="margin-left: 5px;">LiUI</span>',
    styles: []
  })

  props.fns.footerChange({
    app: 'liui',
    styles: []
  })

  render(props)

  props.fns.appMounted()
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount (props) {
  // ReactDOM.unmountComponentAtNode(props.container ? props.container.querySelector('#root') : document.getElementById('root'));
  vm.$destroy()
  vm = null
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update (props) {
  console.log('update props', props)
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
