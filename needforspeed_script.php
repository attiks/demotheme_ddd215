<?php if ($GLOBALS['needforspeed']): ?> 
  <?php print $scripts; ?>
  <script async src="/<?php print path_to_theme() ?>/js/script.min_1429301169711.js"></script>
<?php else: ?>
  <?php print $scripts; ?>
<?php endif; ?>
