// ==UserScript==
// @name              Hacker News - Dark Theme
// @namespace         https://github.com/dparpyani
// @description       A dark theme for Hacker News (YCombinator).
// @include           https://news.ycombinator.com*
// @require           https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant             none
// @version           1.1
// ==/UserScript==

var loadScript = function (src, callback) {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.onload = callback;
  elem.src = src;
  document.body.appendChild(elem);
};

function start() {
  var locationIs = function (regex) {
    return window.location.href.match(regex);
  };

  var config = {
    textAreaBg: '#E0E0E0',
    textAreaLeftBorder: '12px solid #CCCCCC',
    inputColor: 'black',
    inputHoverOnBg: '#CCCCCC',
    inputHoverOffBg: '#DFDFDF',
    fontColor: '#CCCCCC',
    comheadDefaultColor: '#828282',
    comheadLinksColor: 'orange',
    topBarText: '&nbsp;',
    topBarColor: '#1A1A1A',
    bodyBg: '#1A1A1A',
    centreBg: '#2B2B2B',
    commonBorderSpacing: '1px solid #2B2B2B'
  };

  // Avoid name collisions
  var myJQuery = jQuery;
  jQuery.noConflict(true);

  // Common

  //// Background colors
  myJQuery('body').css('background-color', config.bodyBg);
  myJQuery('table').css('background-color', config.centreBg);

  myJQuery('input').css('background-color', config.inputHoverOffBg);
  myJQuery('input').hover(function () {
    myJQuery(this).css('background-color', config.inputHoverOnBg);
  }, function () {
    myJQuery(this).css('background-color', config.inputHoverOffBg);
  });

  //// Text colors
  myJQuery('body').css('color', config.fontColor);
  myJQuery('table, tr, td').children().css('color', config.fontColor);
  myJQuery('font').css('color', config.fontColor);
  myJQuery('a:link').css('color', config.fontColor);
  //// Comments
  myJQuery('.c00').css('color', config.fontColor);

  myJQuery('.comhead, .subtext').css('color', config.comheadDefaultColor);
  myJQuery('.subtext > a').css('color', config.comheadLinksColor);

  myJQuery('input').css('color', config.inputColor);
  myJQuery('.pagetop:eq(1)').children().css('color', 'yellow'); // Login button

  //// Spacing
  myJQuery('td').css('border', config.commonBorderSpacing);

  if (locationIs(/.*ycombinator\.com\/rss.*/)) {
    // RSS -- No theme
  } else if (locationIs(/.*ycombinator\.com\/dmca.*/)) {
    // DMCA

  } else if (locationIs(/.*ycombinator\.com\/.*login.*/)) {
    // Login

  } else if (locationIs(/.*ycombinator\.com\/submit.*/)) {
    // Submit

  } else if (locationIs(/.*ycombinator\.com\/item.*/)) {
    // Discussions

    //// Background colors
    myJQuery('textarea').css('background-color', config.textAreaBg);
    myJQuery('textarea').css('border-left', config.textAreaLeftBorder);

    //// Text Colors
    myJQuery('.comhead > a').css('color', config.comheadLinksColor);

    //// Bar at top
    myJQuery('tr:eq(0)').next().html(config.topBarText);
    myJQuery('tr:eq(0)').next().css('background-color', config.topBarColor);
  }  else {
    //// Bar at top
    myJQuery('tr:eq(0)').next().html(config.topBarText);
    myJQuery('tr:eq(0)').next().css('background-color', config.topBarColor);
  }

  //// Footer
  myJQuery('.pagetop:eq(0)').append(' | <a href="http://www.github.com/dparpyani" style="color: cyan;">Hi there :)</a>');
}

start();
