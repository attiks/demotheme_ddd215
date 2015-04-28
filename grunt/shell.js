/* global module */
module.exports = {
  all: {
    command: 'drush cache-clear theme-registry'
  },
  cleancritical: {
    // Remove inlined svg or images.
    command: 'sed -i  \'/data:/d\' css/critical[0-9].css; cat css/critical1.css css/critical[0-9].css > css/critical.css'
  }
};
