$(window).ready(function() {
  // Turns Pixel length into Number
  var pixToNum = window.pixToNum = function(pixStr) {
    var pixStrLen = pixStr.length,
        pStr      = pixStr.substring(0, pixStrLen - 2),
        pixNum    = parseInt(pStr);
    return pixNum;
  };

  // Turns Number into Pixels
  var numToPix = window.numToPix = function(num) {
    return num + "px";
  };

  // Animate in Font Awesome Logos
  // $(document).ready(function() {
  //     $("main").fadeIn(2000);
  //     $("ul").animate({marginTop:"0px"}, 2500);
  // });

  // Resize introduction to a different height
  var introHeight = Math.round(0.75 * pixToNum($(".header").css("height"))) + "px";
  $(".introduction").css( "height", introHeight);
  $(window).resize(function () {
    introHeight = Math.round(0.75 * pixToNum($(".header").css("height"))) + "px";
    $(".introduction").css( "height", introHeight);
  });

  // Resize featured-work to a different height
  var featWorkHeight = Math.round(0.5 * pixToNum($(".header").css("height"))) + "px";
  $(".featured-work").css( "height", featWorkHeight);
  $(window).resize(function () {
    featWorkHeight = Math.round(0.5 * pixToNum($(".header").css("height"))) + "px";
    $(".featured-work").css( "height", featWorkHeight);
  });

  // Code to change header color and opacity of header and header image as user scrolls
  $("#main").on( "scroll", function() {
    var scrollStart = 0,
        scrollEnd   = pixToNum($(".header").css("height"));
    var scrollProgress = $(this).scrollTop() - scrollStart,
        scrollTotal    = scrollEnd - scrollStart;
    var percentage = (scrollProgress / scrollTotal) + 0.3;
    percentage = Math.min(1, Math.max(0, percentage));
    $(".header").css("background-color", "rgba(255, 255, 255, " + percentage + ")");
    $(".header").css("opacity", String(1 - (percentage - 0.3)));

    // Change size AND position of header logo image as scrolling is done


  });

  // Position Header Logo image
  // First center it and then change it's position as one scrolls
  var headerHeight = pixToNum($("#header").css("height")),
      headerWidth = pixToNum($("#header").css("width"));
  var headerImgHeight = pixToNum($("#header-logo").css("height")),
      headerImgWidth = pixToNum($("#header-logo").css("width"));
  var hLTopDisp = numToPix(headerHeight/2 - headerImgHeight/1.5),
      hLLeftDisp = numToPix(headerWidth/2 - headerImgWidth/2);
  $("#header-logo").css("top",hLTopDisp);
  $("#header-logo").css("left",hLLeftDisp);

  // Change position as window is resized
  $(window).resize(function () {
    var headerHeight = pixToNum($("#header").css("height")),
        headerWidth = pixToNum($("#header").css("width"));
    var headerImgHeight = pixToNum($("#header-logo").css("height")),
        headerImgWidth = pixToNum($("#header-logo").css("width"));
    var hLTopDisp = numToPix(headerHeight/2 - headerImgHeight/1.5),
        hLLeftDisp = numToPix(headerWidth/2 - headerImgWidth/2);
    $("#header-logo").css("top",hLTopDisp);
    $("#header-logo").css("left",hLLeftDisp);
  });


  // Send Email Button
  // document.getElementById('email').onclick = function() {
  //     window.open('mailto:olea.ismael@gmail.com');
  // };
});

// Update Later with Template Tag
// http://blog.teamtreehouse.com/creating-reusable-markup-with-the-html-template-element
