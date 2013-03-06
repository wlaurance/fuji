module.exports = function(fuji){
  require('./bucket')(fuji);
  require('./ping')(fuji);

  /*
   * one off commands
   */
  fuji.commands.settings = function(p){
    var cb = arguments[arguments.length - 1];
    var print = function(){
      var host, port;
      host = process.env.FUJI_RIAK_HOST || '127.0.0.1';
      port = process.env.FUJI_RIAK_PORT || 8098;
      console.log('Riak host: ' + host);
      console.log('Riak port: ' + port);
    };
    if (p === 'reset'){
      //reset vars
      console.log('reset');
      var filePath = require('path').join(process.env.HOME, '.fujiconfig');
      var fs = require('fs');
      fs.readFile(filePath, function(err, blob){
        if (!err){
          try{
            var json = JSON.parse(blob.toString());
            json.host = '127.0.0.1';
            json.port = 8098;
            fs.writeFile(filePath, JSON.stringify(json), function(error){
              cb();
            });
          } catch (e){
            console.error(e);
          }
        }
      });
    } else {
      print();
    }
  };
};
