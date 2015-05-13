<?php if (isset($GLOBALS['needforspeed']) && $GLOBALS['needforspeed']): ?> 
  <style>
    <?php include path_to_theme() . '/css/critical-min.css'; ?>
  </style>
  <script>
    if(window.document.cookie&&window.document.cookie.indexOf('fonts-loaded')>-1&&window.document.documentElement.className.indexOf('fonts-loaded')===-1){window.document.documentElement.className+=' fonts-loaded';};
    <?php include path_to_theme() . '/jslib/cssloader.js'; ?>
    loadCSS("/<?php print path_to_theme() ?>/css/site_1431522443143.css");
    <?php include path_to_theme() . '/jslib/jsloader.js'; ?>
  </script><noscript><link href="/<?php print path_to_theme() ?>/css/site_1431522443143.css" rel="stylesheet"></noscript>
<?php else: ?>
  <?php print $styles; ?>
<?php endif; ?>
