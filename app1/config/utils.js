const path = require("path")
const fs = require("fs");
const packageJson = require('../package.json');

const doesMfConfigExist = fs.existsSync('./mf-config.js')
const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const generateMFconfig = () => {
  const {name, filename = 'remoteEntry.js', remotes, exposes } = require('../mf-config');
  const isProd = process.env.NODE_ENV === 'production;'
  const cdnPath = isProd ? "prodCdnPath" : "devCdnPath"

  return {
    name,
    filename,
    remotes: (remotes && Object.keys(remotes).length) ? Object.keys(remotes).reduce((acc, currentValue) => {
      return {
        ...acc,
        [currentValue]: `${currentValue}@${remotes[currentValue][cdnPath]}/${filename}`
      }
    }, {}) : {},
    exposes: (exposes && Object.keys(exposes).length) ? Object.keys(exposes).reduce((acc, currentValue) => ({
      ...acc,
      [`./${currentValue}`]: path.resolve(exposes[currentValue])
    }), {}) : {},
    shared: packageJson.dependencies,
  }
}

module.exports = {
  generateMFconfig,
  doesMfConfigExist,
  resolveApp
}