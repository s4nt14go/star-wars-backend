# Star Wars API wrapper using AppSync

List Star Wars characters and search by name, the REST API used under the hood is https://swapi.dev

### Techs used in this backend
* Serverless Framework
* Node
* TypeScript
* Axios

AWS serverless:
* AppSync (GraphQL)
* Lambda

CI/CD:
* GitHub Actions

> The frontend is in this [other repo](https://github.com/s4nt14go/star-wars-frontend) and this is the [demo link](https://s4nt14go-star-wars.netlify.app)

## Instructions

Use Node 12 version as lambdas, using [nvm](https://github.com/nvm-sh/nvm) you can:

```
# set Node 12 in current terminal
nvm use 12
# set Node 12 as default (new terminals will use 12)
nvm alias default 12
```

After setting your AWS credentials, install dependencies and deploy:

```
npm ci
# deploy on dev stage
npm run deploy:dev
# ...to deploy on prod stage
npm run deploy:prod
```
