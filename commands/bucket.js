var riak = require(__dirname + '/../lib/db');
module.exports = function(fuji){
  fuji.commands.bucket = function(bucket, cmd){
    var cb = arguments[arguments.length - 1];
    if ( arguments.length < 3) {
      switch(bucket){
        case 'list':
          riak.buckets(function(e, buckets){
            console.log(buckets);
            cb();
          });
          break;
        case 'stats':
          riak.stats(function(e, stats){
            console.log(stats);
            cb();
          });
          break;
        default:
          console.log(bucket + ' not recognized');
          cb();
      }
    } else {
      switch(cmd){
        case 'keys':
          var keyStream = riak.keys(bucket, { keys: 'stream' });
          keyStream.on('keys', console.dir);
          keyStream.on('end', cb);
          keyStream.start();
          break;
        case 'count':
          riak.count(bucket, function(e,r,b){
            console.log(r);
            cb();
          });
          break;
        case 'props':
          riak.getBucket(bucket, function(err, properties){
            console.log(properties);
            cb();
          });
          break;
        case 'getAll':
          riak.getAll(bucket, function(err, all){
            console.log(all);
            cb();
          });
          break;
        default:
          console.log(cmd + ' not recognized');
          cb();
      }
    }
  };
};
