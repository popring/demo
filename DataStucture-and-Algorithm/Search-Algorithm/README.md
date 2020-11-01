# 搜索


[参考维基百科](https://zh.wikipedia.org/wiki/%E6%90%9C%E7%B4%A2_(%E8%AE%A1%E7%AE%97%E6%9C%BA))


## BinarySearch（二分查找）

注
```js
// 我原本的思路是
pivot = Math.floor((left + right) / 2)
// leetcode 官方为，并解释是阻止溢出（Prevent (left + right) overflow）
pivot = left + Math.floor((right - left) / 2)
```


