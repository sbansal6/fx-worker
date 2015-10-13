var express = require('express');
var session = require('express-session');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var winston = require('winston');
var expressWinston = require('express-winston');
var winstonDB = require('winston-mongodb').MongoDB;

// Constants ========================================================================
var PORT = process.env.PORT;


// Express Configuration =============================================================
app.disable('etag');
app.set('json spaces', 4);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.all('/*', function (req, res, next) {
  // CORS headers
  res.header('Access-Control-Allow-Origin', '*');
  // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// region Configure Logger
expressWinston.requestWhitelist.push('body');
expressWinston.responseWhitelist.push('body');

/**
 * Use Winston Logger
 */
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      level: 'info',
      json: false,
      colorize: true
    })
    // ,
    // new winston.transports.MongoDB({
    //   host: mongoConfig.host,
    //   port: mongoConfig.port,
    //   db: mongoConfig.database,
    //   collection: 'apilog',
    //   username: mongoConfig.username,
    //   password: mongoConfig.password,
    //   level: 'info',
    //   colorize: true
    // })
  ],
  meta: false, // causing issue with /api/getcomponents api call
  msg: 'HTTP {{req.method}} {{req.url}} {{res}}',
  expressFormat: true,
  colorStatus: true
}));

require('./routes/index')(app);
// End Routes =========================================================================

// /**
//  * Use Winston Error Logger
//  */
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: false,
      colorize: true
    })
    // ,
    // new winston.transports.MongoDB({
    //   host: mongoConfig.host,
    //   port: mongoConfig.port,
    //   db: mongoConfig.database,
    //   collection: 'apilog',
    //   username: mongoConfig.username,
    //   password: mongoConfig.password,
    //   level: 'info',
    //   colorize: true
    // })
  ],
  meta: false,
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: true,
  colorStatus: true
}));
// endregion
// endregion
// region Error Handler Middleware
/**
 * Error handler for all the applications
 */
app.use(function (err, req, res, next) {
  console.log(err.stack)
  var body = {
    error: {
      message: err.message || '',
      type: err.name || '',
      code: err.code,
      error_subcode: err.subcode || err.code
    }
  };
  // to do, handle 500 internal server errors
  if (err.code == 500) {
    console.log('hahah');
  }
  res.status(err.status).json(body);
});
// endregion

app.listen(3005, function () {
  console.log('Express server listening on port ' + 3001);
})  // endregion
