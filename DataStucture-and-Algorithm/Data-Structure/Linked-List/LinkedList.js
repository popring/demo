// 单链表
/**
 *
 * @param {number} val 节点的值
 */
function Node(val) {
  this.val = val
  this.next = null
}

function LinkedList(data) {
  // 头结点
  this.head = null

  // 链表长度
  this.length = 0

  // 初始化
  this.init = function(data) {
    if (!data) return
    this.append(data)
  }

  // 追加节点
  LinkedList.prototype.append = function(val) {
    let node = new Node(val)

    // 是否为空节点
    if (this.length === 0) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  // 删除节点
  LinkedList.prototype.removeVal = val => {
    let current = this.head
    if (current.val === val) {
      this.head = current.next
      this.length--
      return true
    }
    let pre = current
    while (current.next) {
      pre = current
      current = current.next
      if (current.val === val) {
        pre.next = current.next
        this.length--
        return true
      }
    }
    return false
  }

  // * show 以数组的形式显示所有节点
  LinkedList.prototype.show = function() {
    let current = this.head
    let all = []
    while (current) {
      all.push(current.val)
      current = current.next
    }
    return all
  }

  this.init(data)
}

let node = new LinkedList(1)
node.append(2)
node.append(3)
node.append(4)
node.append(5)
console.log(node.removeVal(8))
console.log(node.show())
