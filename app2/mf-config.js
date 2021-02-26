module.exports = {
  name: 'container',
  filename: 'remoteEntry.js',
  remotes: {
    newapp: {
      devCdnPath: 'http://localhost:8082',
      prodCdnPath: 'https://aws.cloudfront.com/app1/v1',
    },
  },
};
