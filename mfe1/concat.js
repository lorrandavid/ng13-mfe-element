const fs = require('fs-extra');
const concat = require('concat');

async function build() {
  const baseDir = 'dist/default';

  const files = [
    `./${baseDir}/runtime.js`,
    `./${baseDir}/polyfills.js`,
    `./${baseDir}/main.js`
  ];

  await fs.ensureDir(baseDir);
  await concat(files, `${baseDir}/mfe1.js`);
}

build();
