module.exports = require('riak-js').getClient({
  host:process.env.FUJI_RIAK_HOST || '127.0.0.1', port: process.env.FUJI_RIAK_PORT || 8098
});
