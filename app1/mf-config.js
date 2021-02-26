module.exports = {
  name: 'newapp',
  filename: 'remoteEntry.js',
  remotes: {
    container: {
      devCdnPath: 'http://localhost:8080',
      prodCdnPath: 'https://aws.cloudfront.com/app1/v1',
    },
  },
  exposes: {
    Home: './src/container/Home',
  },
};
