exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['fantasticBoxCoFeature.js'],
  capabilities: {
    'browserName': 'firefox'
  }
}
