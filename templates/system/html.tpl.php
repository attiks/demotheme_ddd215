<!DOCTYPE html>
  <!--[if IEMobile 7]><html class="no-js ie iem7" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"><![endif]-->
  <!--[if lte IE 6]><html class="no-js ie lt-ie9 lt-ie8 lt-ie7" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"><![endif]-->
  <!--[if (IE 7)&(!IEMobile)]><html class="no-js ie lt-ie9 lt-ie8" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"><![endif]-->
  <!--[if IE 8]><html class="no-js ie lt-ie9" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"><![endif]-->
  <!--[if (gte IE 9)|(gt IEMobile 7)]><html class="no-js ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>><![endif]-->
  <!--[if !IE]><!--><html class="no-js" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>><!--<![endif]-->
<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <?php include path_to_theme() . '/needforspeed_css.php'; ?>

  <script>document.createElement( "picture" );</script>

  <meta http-equiv="cleartype" content="on" />
  <meta name="HandheldFriendly" content="true" />
  <meta name="MobileOptimized" content="width" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />

  <link rel="apple-touch-icon-precomposed" href="/<?php print path_to_theme() ?>/apple-touch-icon-precomposed-114x114.png" sizes="114x114" />
  <link rel="apple-touch-icon-precomposed" href="/<?php print path_to_theme() ?>/apple-touch-icon-precomposed-144x144.png" sizes="144x144" />
  <link rel="apple-touch-icon-precomposed" href="/<?php print path_to_theme() ?>/apple-touch-icon-precomposed-76x76.png" sizes="76x76" />
  <link rel="apple-touch-icon-precomposed" href="/<?php print path_to_theme() ?>/apple-touch-icon-precomposed-120x120.png" sizes="120x120" />
  <link rel="apple-touch-icon-precomposed" href="/<?php print path_to_theme() ?>/apple-touch-icon-precomposed.png" />
  <link rel="apple-touch-icon-precomposed" href="/<?php print path_to_theme() ?>/apple-touch-icon-precomposed-152x152.png" sizes="152x152" />
  <link rel="apple-touch-icon-precomposed" href="/<?php print path_to_theme() ?>/apple-touch-icon-precomposed-72x72.png" sizes="72x72" />
  <link rel="apple-touch-icon-precomposed" href="/<?php print path_to_theme() ?>/apple-touch-icon-precomposed-60x60.png" sizes="60x60" />
  <link rel="apple-touch-icon" href="/<?php print path_to_theme() ?>/apple-touch-icon.png" />
</head>
<body<?php print $attributes;?>>
  <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>

  <script type="text/javascript">

    /* cookie function. get, set, or forget a cookie. [c]2014 @scottjehl https://github.com/filamentgroup/cookie */
    function cookie(e,i,o){if(void 0===i){var t="; "+window.document.cookie,n=t.split("; "+e+"=");return 2===n.length?n.pop().split(";").shift():null}i===!1&&(o=-1);var r;if(o){var c=new Date;c.setTime(c.getTime()+24*o*60*60*1e3),r="; expires="+c.toGMTString()}else r="";window.document.cookie=e+"="+i+r+"; path=/"}

    /* fontfaceobserver Copyright (c) 2014 - Bram Stein https://github.com/bramstein/fontfaceobserver/ */
    (function(){'use strict';function f(a){this.a=k;this.b=void 0;this.d=[];var b=this;try{a(function(a){l(b,a)},function(a){m(b,a)})}catch(c){m(b,c)}}var k=2;function n(a){return new f(function(b,c){c(a)})}function p(a){return new f(function(b){b(a)})}
    function l(a,b){if(a.a===k){if(b===a)throw new TypeError("Promise resolved with itself.");var c=!1;try{var d=b&&b.then;if(null!==b&&"object"===typeof b&&"function"===typeof d){d.call(b,function(b){c||l(a,b);c=!0},function(b){c||m(a,b);c=!0});return}}catch(e){c||m(a,e);return}a.a=0;a.b=b;q(a)}}function m(a,b){if(a.a===k){if(b===a)throw new TypeError("Promise rejected with itself.");a.a=1;a.b=b;q(a)}}
    function q(a){setTimeout(function(){if(a.a!==k)for(;a.d.length;){var b=a.d.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0===a.a?"function"===typeof c?e(c.call(void 0,a.b)):e(a.b):1===a.a&&("function"===typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(g){b(g)}}},0)}f.prototype.e=function(a){return this.c(void 0,a)};f.prototype.c=function(a,b){var c=this;return new f(function(d,e){c.d.push([a,b,d,e]);q(c)})};
    function r(a){return new f(function(b,c){function d(c){return function(d){g[c]=d;e+=1;e===a.length&&b(g)}}var e=0,g=[];0===a.length&&b(g);for(var h=0;h<a.length;h+=1)a[h].c(d(h),c)})}function s(a){return new f(function(b,c){for(var d=0;d<a.length;d+=1)a[d].c(b,c)})};window.Promise||(window.Promise=f,window.Promise.resolve=p,window.Promise.reject=n,window.Promise.race=s,window.Promise.all=r,window.Promise.prototype.then=f.prototype.c,window.Promise.prototype["catch"]=f.prototype.e);}());

    (function(){'use strict';function e(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.f=document.createElement("span");this.e=document.createElement("span");this.d=-1;this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";
    this.e.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.f.style.cssText="display:inline-block;width:200%;height:200%;";this.b.appendChild(this.f);this.c.appendChild(this.e);this.a.appendChild(this.b);this.a.appendChild(this.c)}function r(a,b,c){a.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;visibility:hidden;position:absolute;width:auto;margin:0;padding:0;top:0;white-space:nowrap;font-size:100px;font-family:"+b+";"+c}
    function s(a){var b=a.a.offsetWidth,c=b+100;a.e.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.d!==b?(a.d=b,!0):!1}function t(a,b){a.b.addEventListener("scroll",function(){s(a)&&null!==a.a.parentNode&&b(a.d)},!1);a.c.addEventListener("scroll",function(){s(a)&&null!==a.a.parentNode&&b(a.d)},!1);s(a)};function u(a,b){this.family=a;this.style=b.style||"normal";this.variant=b.variant||"normal";this.weight=b.weight||"normal";this.stretch=b.stretch||"stretch";this.featureSettings=b.featureSettings||"normal"}var v=null;
    u.prototype.a=function(a){a=a||"BESbswy";var b="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",c=document.createElement("div"),k=new e(a),l=new e(a),m=new e(a),f=-1,d=-1,g=-1,n=-1,p=-1,q=-1,h=this;r(k,"sans-serif",b);r(l,"serif",b);r(m,"monospace",b);c.appendChild(k.a);c.appendChild(l.a);
    c.appendChild(m.a);document.body.appendChild(c);n=k.a.offsetWidth;p=l.a.offsetWidth;q=m.a.offsetWidth;return new Promise(function(a,y){function w(){null!==c.parentNode&&document.body.removeChild(c)}function x(){if(-1!==f&&-1!==d&&-1!==g&&f===d&&d===g){if(null===v){var b=/AppleWeb[kK]it\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);v=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))}v?f===n&&d===n&&g===n||f===p&&d===p&&g===p||f===q&&d===q&&g===q||(w(),a(h)):(w(),
    a(h))}}setTimeout(function(){w();y(h)},3E3);t(k,function(a){f=a;x()});r(k,h.family+",sans-serif",b);t(l,function(a){d=a;x()});r(l,h.family+",serif",b);t(m,function(a){g=a;x()});r(m,h.family+",monospace",b)})};window.FontFaceObserver=u;window.FontFaceObserver.prototype.check=u.prototype.a;}());
  </script>

  <?php include path_to_theme() . '/needforspeed_script.php'; ?>
</body>
</html>
