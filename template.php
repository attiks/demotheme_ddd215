<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * demotheme.
 */

/**
 * Implements hook_js_alter().
 */
function demotheme_js_alter(&$javascript) {
  $GLOBALS['needforspeed'] = FALSE;
  if (user_is_anonymous() && !variable_get('needforspeed_disabled', FALSE)) {
    $GLOBALS['needforspeed'] = TRUE;
    foreach ($javascript as $key => $item) {
      if (isset($item['keep']) && $item['keep']) {
        // Keep tagged scripts.
      }
      else {
        unset($javascript[$key]);
      }
    }
  }
}
