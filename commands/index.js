module.exports = function(fuji){
  require('./bucket')(fuji);
  require('./ping')(fuji);

  /*
   * one off commands
   */
  fuji.commands.settings = function(cb){
    var host, port;
    host = process.env.FUJI_RIAK_HOST || '127.0.0.1';
    port = process.env.FUJI_RIAK_PORT || 8098;
    console.log('Riak host: ' + host);
    console.log('Riak port: ' + port);
  };
};
