// Load fonts dynamically.
(function (w) {
  if (cookie('fonts-loaded') && w.document.documentElement.className.indexOf('fonts-loaded') === -1) {
    w.document.documentElement.className += ' fonts-loaded';
    return;
  }
  if (cookie('fonts-loaded') || w.document.documentElement.className.indexOf('fonts-loaded') > -1) {
    return;
  }
/*
  var fontMontserrat400 = new w.FontFaceObserver('montserratregular', {
    weight: 400
  });
  var fontMontserrat700 = new w.FontFaceObserver('montserratbold', {
    weight: 700
  });
*/
  w.Promise
    // .all([fontMontserrat400.check(), fontMontserrat700.check()])
    .all([])
    .then(function () {
      w.document.documentElement.className += ' fonts-loaded';
      cookie('fonts-loaded', 30);
    });
}(this));

(function () {
  // Vanilla javascript
})();
