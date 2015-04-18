<?php if ($GLOBALS['needforspeed']): ?> 
  <style>
    <?php include 'sites/all/themes/custom/demotheme/css/critical-min.css'; ?>
  </style>
  <script>
    if(window.document.cookie&&window.document.cookie.indexOf('fonts-loaded')>-1&&window.document.documentElement.className.indexOf('fonts-loaded')===-1){window.document.documentElement.className+=' fonts-loaded';};
    <?php include 'sites/all/themes/custom/demotheme/jslib/cssloader.js'; ?>
    loadCSS("/sites/all/themes/custom/demotheme/css/site_1429341975052.css");
    <?php include 'sites/all/themes/custom/demotheme/jslib/jsloader.js'; ?>
  </script><noscript><link href="/sites/all/themes/custom/demotheme/css/site_1429341975052.css" rel="stylesheet"></noscript>
<?php else: ?>
  <?php print $styles; ?>
<?php endif; ?>
