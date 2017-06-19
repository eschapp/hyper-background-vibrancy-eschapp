module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');

module.exports.decorateConfig = config => {
  config.backgroundColor = 'rgba(255,255,255,0.3)';
  return config;
}