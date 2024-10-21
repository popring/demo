const fs = require('fs');
const path = require('path');

// 链接的基础 URL
const baseUrl = 'https://popring.cn/demo';

// 要扫描的目录（此处为当前目录）
const directoryToScan = './';

// 要生成的 README 文件
const readmeFile = 'README.md';

// 读取前置内容的文件
const additionalFile = 'additional-content.md';  // 这是你希望先读取的文件

// 用于生成链接并按目录结构分类
function generateLinksByDirectory(directory, baseUrl) {
  let result = {};

  // 递归扫描目录
  function scanDir(currentDir, currentPath) {
    const files = fs.readdirSync(currentDir);

    files.forEach(file => {
      const fullPath = path.join(currentDir, file);
      const relativePath = path.join(currentPath, file);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        scanDir(fullPath, relativePath);  // 递归处理子目录
      } else if (file.endsWith('.html')) {
        // 使用 encodeURIComponent 对文件名和路径进行编码
        const url = `${baseUrl}/${relativePath.replace(/\\/g, '/').split('/').map(encodeURIComponent).join('/')}`;
        if (!result[currentPath]) {
          result[currentPath] = [];
        }
        result[currentPath].push(`- [${file}](${url})`);
      }
    });
  }

  scanDir(directory, '');
  return result;
}

// 生成 README 文件
function generateReadme(linksByDir) {
  let content = '';

  // 读取附加内容（来自外部文件）
  if (fs.existsSync(additionalFile)) {
    content = fs.readFileSync(additionalFile, 'utf-8');
  }

  content += '\n\n## Demo Files\n\n';

  // 按目录结构分类展示链接
  for (const dir in linksByDir) {
    if (dir === '') {
      content += `### Root\n`;
    } else {
      content += `### ${dir}\n`;
    }
    content += `${linksByDir[dir].join('\n')}\n\n`;
  }

  fs.writeFileSync(readmeFile, content.trim());
}

// 扫描目录并生成分类的链接
const linksByDir = generateLinksByDirectory(directoryToScan, baseUrl);

// 生成 README 文件
generateReadme(linksByDir);
