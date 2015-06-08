/* global module */
module.exports = {
  cleartheme: {
    command: 'drush <%= local.drush.alias %> cache-clear theme-registry'
  },
  clearcache: {
    command: 'drush <%= local.drush.alias %> cache-clear all'
  },
  cleancritical: {
    // Remove inlined svg or images.
    command: 'sed -i  \'/data:/d\' css/critical[0-9].css; cat css/critical1.css css/critical[0-9].css > css/critical.css'
  }
};
