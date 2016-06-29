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

  // Resize/Change Position upon visiting the site and loading the DOM

  // Resize/Change Position upon resizing the window

  // Features activated upon scrolling

  // Resize introduction to a different height
  var introHeight = Math.round(0.75 * pixToNum($(".header").css("height"))) + "px";
  $(".introduction").css( "height", introHeight);
  $(window).resize(function () {
    introHeight = Math.round(0.75 * pixToNum($(".header").css("height"))) + "px";
    $(".introduction").css( "height", introHeight);
  });

  // Resize featured-work to a different height
  var featWorkHeight = Math.round(0.75 * pixToNum($(".header").css("height"))) + "px";
  $(".featured-work").css( "height", featWorkHeight);
  $(window).resize(function () {
    featWorkHeight = Math.round(0.75 * pixToNum($(".header").css("height"))) + "px";
    $(".featured-work").css( "height", featWorkHeight);
  });

  // Code to change header color and opacity of header and header image as user scrolls
  $("#main").on( "scroll", function() {
    var scrollStart = 0,
        scrollEnd   = 0.8 * pixToNum($(".header").css("height"));
    var scrollProgress = $(this).scrollTop() - scrollStart,
        scrollTotal    = scrollEnd - scrollStart;
    var percentage = (scrollProgress / scrollTotal);

    percentage = Math.min(1, Math.max(0.25, percentage));
    $(".header").css("background-color", "rgba(255, 255, 255, " + percentage + ")");

    var hLOpacity = (1 - percentage).toString();
    $("#header-logo").css("opacity", hLOpacity);

    // Change size AND position of header logo image as scrolling is done
    var topNum = pixToNum($("#header-logo").css("top")),
        scrollTop = $(this).scrollTop(),
        headerHeight = pixToNum($("#header").css("height")),
        headerImgHeight = pixToNum($("#header-logo").css("height")),
        hLTopDispNum = headerHeight/2 - headerImgHeight/1;

    var scrollTopPastTopNum = topNum < scrollTop,
        bottomOfHLImgIsInHeader = topNum + headerImgHeight < headerHeight,
        scrollTopBeforeTopNum = topNum > scrollTop,
        scrollTopPastHLTopDisp = hLTopDispNum < scrollTop;

    if (scrollTop === 0) {
      $("#header-logo").css("top", hLTopDispNum);
      $("#header-logo").css("opacity", "1");
    } else if (scrollTopPastTopNum && bottomOfHLImgIsInHeader) {
      $("#header-logo").css("top", scrollTop);
      // shrink header-logo
    } else if (scrollTopBeforeTopNum && scrollTopPastHLTopDisp) {
      $("#header-logo").css("top", scrollTop);
      // grow header-logo
    }
  });

  // Position Header Logo image
  // First center it and then change it's position as one scrolls
  var headerHeight = pixToNum($("#header").css("height")),
      headerWidth = pixToNum($("#header").css("width"));
  var headerImgHeight = pixToNum($("#header-logo").css("height")),
      headerImgWidth = pixToNum($("#header-logo").css("width"));
  var hLTopDisp = numToPix(headerHeight/2 - headerImgHeight/1.25),
      hLLeftDisp = numToPix(headerWidth/2 - headerImgWidth/2);
  $("#header-logo").css("top",hLTopDisp);
  $("#header-logo").css("left",hLLeftDisp);



  // Change position of Header Logo as window is resized
  $(window).resize(function () {
    var headerHeight = pixToNum($("#header").css("height")),
        headerWidth = pixToNum($("#header").css("width"));
    var headerImgHeight = pixToNum($("#header-logo").css("height")),
        headerImgWidth = pixToNum($("#header-logo").css("width"));
    var hLTopDisp = numToPix(headerHeight/2 - headerImgHeight/1.25),
        hLLeftDisp = numToPix(headerWidth/2 - headerImgWidth/2);
    $("#header-logo").css("top",hLTopDisp);
    $("#header-logo").css("left",hLLeftDisp);
  });

  // Position introduction article in introduction
  // introHeight already defined
  var introWidth = pixToNum($("#introduction").css("width"));
  var introArtHeight = pixToNum($("#introduction-article").css("height")),
      introArtWidth = pixToNum($("#introduction-article").css("width"));
  var introArtTopDisp = numToPix(pixToNum(introHeight)/2 - introArtHeight/1.5),
      introArtLeftDisp = numToPix(introWidth/2 - introArtWidth/2);
  $("#introduction-article").css("top",introArtTopDisp);
  $("#introduction-article").css("left",introArtLeftDisp);

  // $("#featured-work-title").css("left",introArtLeftDisp);

  // Change position of Header Logo as window is resized
  $(window).resize(function () {
    var introWidth = pixToNum($("#introduction").css("width"));
    var introArtHeight = pixToNum($("#introduction-article").css("height")),
        introArtWidth = pixToNum($("#introduction-article").css("width"));
    var introArtTopDisp = numToPix(pixToNum(introHeight)/2 - introArtHeight/1.5),
        introArtLeftDisp = numToPix(introWidth/2 - introArtWidth/2);
    $("#introduction-article").css("top",introArtTopDisp);
    $("#introduction-article").css("left",introArtLeftDisp);
  });

  // Position introduction article in introduction
  // featWorkHeight already defined
  var featWorkWidth = pixToNum($(".featured-work").css("width"));
  var featArtHeight = pixToNum($(".featured-work-article").css("height")),
      featArtWidth = pixToNum($(".featured-work-article").css("width"));
  var featArtTopDisp = numToPix(pixToNum(featWorkHeight)/2 - featArtHeight/1.5),
      featArtLeftDisp = numToPix(featWorkWidth/2 - featArtWidth/2);
  $(".featured-work-article").css("top",featArtTopDisp);
  $(".featured-work-article").css("left",featArtLeftDisp);

  // Change position of Header Logo as window is resized
  $(window).resize(function () {
    var featWorkWidth = pixToNum($(".featured-work").css("width"));
    var featArtHeight = pixToNum($(".featured-work-article").css("height")),
        featArtWidth = pixToNum($(".featured-work-article").css("width"));
    var featArtTopDisp = numToPix(pixToNum(featWorkHeight)/2 - featArtHeight/1.5),
        featArtLeftDisp = numToPix(featWorkWidth/2 - featArtWidth/2);
    $(".featured-work-article").css("top",featArtTopDisp);
    $(".featured-work-article").css("left",featArtLeftDisp);
  });

  // Send Email Button
  // document.getElementById('email').onclick = function() {
  //     window.open('mailto:olea.ismael@gmail.com');
  // };
});

// Update Later with Template Tag
// http://blog.teamtreehouse.com/creating-reusable-markup-with-the-html-template-element
