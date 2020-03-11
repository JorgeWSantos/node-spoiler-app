const express = require('express');
const http = require('http')
const status = require('http-status')
const spoilersRoute = require('./src/routes/spoilers')
var cors = require('cors');
// const sequelize = require('./src/database/database')

const app = express();
app.use(cors())

app.use(express.json());

app.use('/api', spoilersRoute);

app.use((request, response, next) => {
    response.status(status.NOT_FOUND).send();
});

//ignore favicon
app.use( function(req, res, next) {

    if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
      return res.sendStatus(204);
    }
  
    return next();
  
  });

app.use((error, request, response, next) => {
    response.status(status.INTERNAL_SERVER_ERROR).json({error})
});

// sequelize.sync({force: true}).then(() => {
const port = process.env.PORT || 3000

app.set('port', port)

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`listen on ${port}`)
});
// })
