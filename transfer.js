const fs = require('fs');
const { join } = require('path');

console.log('dist folder');

// 先创建一个sourceMap文件夹
fs.mkdirSync(join(__dirname, './dist'));

console.log('move file...');
fs.readdirSync(join(__dirname, './docs/.vuepress/dist')).forEach(file => {
    fs.rename(join(__dirname, `./docs/.vuepress/dist/${file}`), join(__dirname, `./dist/${file}`), (e) => {
      if (e) {
        console.log('move error: ', e);
      }
    });
});
console.log('move done');