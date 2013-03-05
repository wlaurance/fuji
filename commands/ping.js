var riak = require(__dirname + '/../lib/db');
module.exports = function(fuji){
  fuji.commands.ping = function(cb){
    riak.ping(function(err, pong){
      console.log(pong ? 'pong'.green.bold : 'no dice, ping fail'.red.bold);
      cb();
    });
  };
};
