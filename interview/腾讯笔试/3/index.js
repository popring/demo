function bind() {
  var jsContainer = document.querySelector('#jsContainer')
  var game = document.querySelector('.game')
  game.addEventListener('click', function (e) {
    var current = document.querySelectorAll('.current')
    var wrap = document.querySelectorAll('.wrap')
    removeClass(current)
    removeClass(wrap)

    // 当前点击
    var target = e.target
    // 行元素
    var sibling = target.parentNode.children
    addClass(sibling)
    // 列元素
    var index = getChildrenIndex(target)+1
    var td = document.querySelectorAll(`.game>tbody>tr>td:nth-child(${index})`)
    addClass(td)
    // 当前点击元素
    target.className = 'current'
  })
}

function addClass(element, target) {
  if (element.length) {
    for (let i = 0; i < element.length; i++) {
      element[i].classList.add('wrap')
    }
  } else {
    element.classList.add('wrap')
  }
}

function removeClass(element) {
  if (element.length) {
    for (let i = 0; i < element.length; i++) {
      element[i].className = ''
    }
  } else {
    element.className = ''
  }
}

function getChildrenIndex(ele) {
  var i = 0
  while ((ele = ele.previousElementSibling)) {
    i++
  }
  return i
}

bind()
