<?php if (isset($GLOBALS['needforspeed']) && $GLOBALS['needforspeed']): ?> 
  <?php print $scripts; ?>
  <script async src="/<?php print path_to_theme() ?>/js/script.min_1431522443143.js"></script>
<?php else: ?>
  <?php print $scripts; ?>
<?php endif; ?>
