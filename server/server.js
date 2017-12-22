const app = require('./app');
const port = process.env.PORT || 4000;

const server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});