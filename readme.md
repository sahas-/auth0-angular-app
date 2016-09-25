#### install http-server to run angular using express server for local dev
npm install http-server -g
#### install dependencies
npm install
#### update domain and clientID in app.js
`        authProvider.init({
            domain: 'yourdomain.auth0.com',
            clientID: 'clientID'
        });`
#### run 
http-server

