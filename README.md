# react-app-frontend

Sample app created with [Create React App](https://github.com/facebookincubator/create-react-app) and used for my tutorial [Building a Serverless Web App with AWS Services](https://www.pluralsight.com/guides/front-end-javascript/building-a-serverless-web-app-on-aws-services).

I took this [React CRUD boilerplate](https://github.com/ariesmcrae/reactjs-crud-boilerplate) and removed all the non-essential functionality, the API mock calls, and upgrade all dependencies to their latest versions. All credit for the app goes to [Aries McRae](https://github.com/ariesmcrae).

You'll need to have [Node.js](https://nodejs.org/en/download/) installed and an API to create/read/update/delete courses and authors, as described in the article.

In the `server` directory you can find a sample API made with Nojde.js and Express to test the app locally. Just execute `npm install` to install the dependencies and start the server with `npm start`. Change the API URL in `src/api/serverUrl.js` to `http:localhost:4000` or whatever your server is deployed.

# License
MIT

