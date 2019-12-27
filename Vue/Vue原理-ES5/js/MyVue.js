function MyVue(options) {
  this._init(options);
}

// 初始化
MyVue.prototype._init = function (options) {
  this.$option = options;
  this.$el = document.querySelector(options.el);
  this.$data = options.data;
  this.$methods = options.methods;

  // 保存着 model 与 view 的映射关系
  this._binding = {};

  this._observe(this.$data);
  this._complie(this.$el);
}

// 监听data
MyVue.prototype._observe = function (obj) {
  var _this = this;
  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    _this._binding[key] = {
      _directives: []
    }
    if (typeof value === 'object') {
      _this._observe(obj[key]);
    }

    var binding = _this._binding[key];
    Object.defineProperty(_this.$data, key, {
      enumberable: true,
      configurable: true,
      get: function () {
        console.log(`${value}被取出使用`);
        return value;
      },
      set: function (newVal) {
        if (value === newVal) return;
        console.log(`${value} 被修改为----------${newVal}`);
        value = newVal;
        binding._directives.forEach(function (item) {
          item.update();
        })
      }
    })
  })
}

// 绑定监听函数
function Wathcer(name, el, vm, exp, attr) {
  this.name = name;
  this.el = el;
  this.vm = vm;
  this.exp = exp;
  this.attr = attr;

  this.update();
}

// 监听函数 触发更新动作
Wathcer.prototype.update = function () {
  this.el[this.attr] = this.vm.$data[this.exp];
}

// 编译模板
MyVue.prototype._complie = function (root) {
  var _this = this;
  var nodes = root.children;

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    // 双向数据绑定
    if (node.hasAttribute('v-model') && (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA')) {
      node.addEventListener('input', (function (key) {
        var attrVal = node.getAttribute('v-model');
        _this._binding[attrVal]._directives.push(new Wathcer(
          'input',
          node,
          _this,
          attrVal,
          'value'
        ));
        return function () {
          _this.$data[attrVal] = nodes[key].value;
        }
      })(i));
      this._cleanAttribute(node, 'v-model');
    }

    // 绑定点击事件
    if (node.hasAttribute('v-click')) {
      node.onclick = (function () {
        var attrVal = node.getAttribute('v-click');
        // 触发函数 并修改this为 MyVue内
        return _this.$methods[attrVal].bind(_this.$data);
      })();
      this._cleanAttribute(node, 'v-click');
    }

    // v-bind 数据绑定
    if (node.hasAttribute('v-bind')) {
      var attrVal = node.getAttribute('v-bind');
      _this._binding[attrVal]._directives.push(new Wathcer(
        'text',
        node,
        _this,
        attrVal,
        'innerHTML'
      ))
      this._cleanAttribute(node, 'v-bind');
    }
  }
}

// 清除待编译的属性
MyVue.prototype._cleanAttribute = function (el, attr) {
  var e = typeof el === String ? document.querySelector('el') : el;
  e.removeAttribute(attr);
}
