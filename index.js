var flatiron = require('flatiron'),
    path = require('path'),
    configFileName = '.fujiconfig';

var fuji = module.exports = new flatiron.App();

fuji.config.file({
  file: path.join(process.env.HOME, configFileName)
});

fuji.use(flatiron.plugins.cli, {
  usage: require(__dirname + '/commands/usage')
});

require('./commands')(fuji);
fuji.use(require('flatiron-cli-config'));
