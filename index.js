var flatiron = require('flatiron'),
    path = require('path');

var fuji = module.exports = new flatiron.App({
  directories:{
    root: path.join(process.env.HOME, '.fuji')
  }
});

fuji.use(require('flatiron-cli-version'));

fuji.use(flatiron.plugins.cli, {
  usage: require(__dirname + '/commands/usage'),
  source: path.join(__dirname, 'fuji', 'commands')
});


