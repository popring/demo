// HTML编码格式
function encodeHTML(source) {
  return ('' + source)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function format(string, dataMap) {
  // 正则表达式替换字符串
  return (string + '').replace(/\{(=|:)?(\w*)\}/g, function(match, type, key) {
    // 将undefined，对象数组等做空处理
    if (dataMap[key] === undefined || typeof dataMap[key] === 'object') {
      return ''
    } else if (type === '=') {
      return dataMap[key]
    } else if (type === ':') {
      return encodeURIComponent(dataMap[key])
    }
    return encodeHTML(dataMap[key])
  })
}

const dataMap = {
  attribute: 'data-cat="fashion"',
  keyword: '连衣裙',
  content: '<女装>'
}
format('<a href="search?q={:keyword}">', dataMap)
// 输出：<a href="search?q=%E8%BF%9E%E8%A1%A3%E8%A3%99">
format('<strong>{content}<>', dataMap)
// 输出：<strong>&lt;女装&gt;<>
format('<div {=attribute}></div>', dataMap)
// 输出：<div data-cat="fashion"></div>
