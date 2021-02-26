# Microfrontend Boilerplate

A boilerplate code for micro-frontend

1. Clone the repo.
2. Main config file is `mf-config.js`, all MicroFrontend related config will be here:

```{
  "name": "container",
  "filename": "remoteEntry.js",
  "remotes": {
    "app1": {
      "devCdnPath": "http://localhost:8081",
      "prodCdnPath": "https://aws.cloudfront.com/app1/v1"
    },
    "app2": {
      "devCdnPath": "http://localhost:8082",
      "prodCdnPath": "https://aws.cloudfront.com/app2/v1"
    }
  },
  "exposes": {
    "HomeApp": "./src/App"
  }
}
```

- `name` : Name of MF App.

- `filename`: This filename will be used when webpack will dynamically load script from cdn. (Do not changes default filename eg: `remoteEntry.js`)

- `remotes`: Here we will have cdn url of our remote app which we want to use in our app

  - `app1` and `app2` are the name of Remote App (Use the same `name` here which is configured in remote App `mf-config.js`).

  - `devCdnPath` is url of remote app local server, will be used in development environment to load remote app.

  - `prodCdnPath` is cdn path of remote app will be used in production environment to load remote app.

- `exposes`: This is where we will say what we want to be shared with other apps

  - Let's say if we want to share `Home` component from our `container` (Name) App, then we will add `HomeApp` as key and source path of that component as value `./src/container/Home/`

  Then we can import `HomeApp` in any app with above config

  `import HomeApp 'container/HomeApp';`
