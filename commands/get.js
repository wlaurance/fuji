var riak = require(__dirname + '/../lib/db');
module.exports = function(fuji){
  fuji.commands.get = function(bucket, key, cb){
    riak.get(bucket, key, function(err, result, meta){
      if (err) {
        throw err;
      }
      console.log(result);
      cb();
    });
  };
};
