var Stream = require('user-stream');
var stream = new Stream({
    consumer_key: 'YeAhMXmdVEGXydeq5HhHDXJF2',
    consumer_secret: 'XlMV5rxMoDEj27090rVpn86naYJAFzsBKs5kTz4qxeJdggPtOx',
    access_token_key: '766339506-1a3SaR33jeyKgstLOVFYzl9VCKrUeV6UlZZulF4e',
    access_token_secret: 'FSPLmSRf0OuaqYdWWhp3JnTQzCD1191CnX55SUoPJbq4u'
});

//create stream
stream.stream();

//listen stream data
stream.on('data', function(json) {
  console.log(json);
});
