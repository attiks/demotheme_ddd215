<?php if ($GLOBALS['needforspeed']): ?> 
  <?php print $scripts; ?>
  <script async src="/<?php print path_to_theme() ?>/js/script.min_1429341975052.js"></script>
<?php else: ?>
  <?php print $scripts; ?>
<?php endif; ?>
