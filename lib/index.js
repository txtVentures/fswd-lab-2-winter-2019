/* eslint no-console: 0 */
'use strict';

// load our server module
var server = require('./server');

// tell the server to listen on a specific port
const port = process.env.PORT || 8000;
server.listen(port, function() {
    console.info('Server listening on port 8000!');
});
