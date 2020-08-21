// Vue 类
export class ToyVue {
  constructor(config) {
    // 挂载模板
    this.template = document.querySelector(config.el)
    // data 响应式
    this.data = reactive(config.data)
    // 挂载方法
    for (const name in config.methods) {
      this[name] = ()=> {
        config.methods[name].apply(this.data)
      }
    }
    // 编译模板
    this.traversal(this.template)
  }

  traversal(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.trim().match(/^{{([\s\S]+)}}$/)) {
        let name = RegExp.$1.trim()
        effect(() => (node.textContent = this.data[name]))
      }
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      let attributes = node.attributes
      for (const attribute of attributes) {
        // 双向数据绑定
        if (attribute.name === 'v-model') {
          let name = attribute.value
          effect(() => (node.value = this.data[name]))
          node.addEventListener(
            'input',
            (event) => (this.data[name] = node.value)
          )
        }

        // 解析 v-bind、`:` 数据绑定
        if (attribute.name.match(/^v\-bind:([\s\S]+)$/) || attribute.name.match(/^\:([\s\S]+)$/)) {
          let attrname = RegExp.$1
          let name = attribute.value
          effect(() => node.setAttribute(attrname, this.data[name]))
        }

        // 解析 v-on、`@` 时间绑定
        if (attribute.name.match(/^v\-on:([\s\S]+)$/) || attribute.name.match(/^\@([\s\S]+)$/)) {
          let eventname = RegExp.$1
          let fnname = attribute.value
          node.addEventListener(eventname, this[fnname])
        }
      }
    }

    if (node.childNodes && node.childNodes.length) {
      for (const child of node.childNodes) {
        this.traversal(child)
      }
    }
  }
}

let effects = new Map()

let currentEffect = null

function effect(fn) {
  currentEffect = fn
  fn()
  currentEffect = null
}

// 双向数据绑定
function reactive(object) {
  let observe = new Proxy(object, {
    get(object, property) {
      if (currentEffect) {
        if (!effects.has(object)) effects.set(object, new Map())
        if (!effects.get(object).has(property))
          effects.get(object).set(property, new Array())

        effects.get(object).get(property).push(currentEffect)
      }
      return object[property]
    },
    set(object, property, value) {
      object[property] = value
      if (effects.has(object) && effects.get(object).has(property)) {
        console.log(effects.get(object), property)
        for (let effect of effects.get(object).get(property)) {
          effect()
        }
      }
      return true
    },
  })
  return observe
}
