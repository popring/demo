// 代码粘贴到swagger页面即可执行

// TODO 注释，重复函数名检查

// 将路径转换为函数名，除根路径外其余都会首字母大写
function getFuncName(path) {
  return path.split('/').reduce((prev, cur, idx) => {
    let res = cur
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, '')
      .replace(/^\S/, (s) => s.toUpperCase())
    if (idx === 1) {
      res = cur.toLowerCase()
    }
    return prev + res
  }, '')
}

// 获取方法
function getMethods() {
  const tagMehods = document.querySelectorAll(
    '.wrapper>section>div>span>div>div>span>div>div>span:nth-child(1)'
  )
  let arr = []
  tagMehods.forEach((item) => {
    arr.push(item.textContent)
  })
  return arr
}

// 获取api接口
function getPaths() {
  const tagPaths = document.querySelectorAll(
    '.wrapper>section>div>span>div>div>span>div>div>span:nth-child(2)'
  )
  let arr = []
  tagPaths.forEach((item) => {
    arr.push(item.getAttribute('data-path'))
  })
  return arr
}

// 生成代码
function test() {
  const methods = getMethods()
  const paths = getPaths()
  let res = []

  let strGet = (funcName, path) =>
    `function ${funcName}(params) { const url = '${path}'; return this.get(url, { params });}`

  let strPost = (funcName, path) =>
    `function ${funcName}(data) { const url = '${path}'; return this.get(url, data);}`

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i]
    const method = methods[i]
    const funcName = getFuncName(path)

    if (method === 'POST') {
      res.push(strPost(funcName, path))
    } else {
      res.push(strGet(funcName, path))
    }
  }

  return res.join('\n')
}

// test
var a = test()
console.log(a)
