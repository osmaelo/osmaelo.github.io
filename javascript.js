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

  // Resize _____________ to appropriate height upon loading the DOM
  // introduction
  var introHeight = Math.round(0.75 * pixToNum($(".header").css("height")));
  $(".introduction").css( "height", numToPix(introHeight));
  // featured-work
  var featWorkHeight = Math.round(0.75 * pixToNum($(".header").css("height")));
  $(".featured-work").css( "height", numToPix(featWorkHeight));

  console.log($("#header-logo").css("top"));
  // debugger
  // Position Header Logo image in Header
  var headerHeight = pixToNum($("#header").css("height")),
      headerWidth = pixToNum($("#header").css("width"));
  var headerImgHeight = pixToNum($("#header-logo").css("height")),
      headerImgWidth = pixToNum($("#header-logo").css("width"));
  var hLTopDisp = numToPix(headerHeight/2 - headerImgHeight/1.25),
      hLLeftDisp = numToPix(headerWidth/2 - headerImgWidth/2);
  $("#header-logo").css("top",hLTopDisp);
  $("#header-logo").css("left",hLLeftDisp);
  console.log($("#header-logo").css("top"));
  // debugger
  
  // Position introduction article in introduction
  var introWidth = pixToNum($("#introduction").css("width"));
  var introArtHeight = pixToNum($("#introduction-article").css("height")),
      introArtWidth = pixToNum($("#introduction-article").css("width"));
  var introArtTopDisp = numToPix(introHeight/2 - introArtHeight/2),
      introArtLeftDisp = numToPix(introWidth/2 - introArtWidth/2);
  $("#introduction-article").css("top",introArtTopDisp);
  $("#introduction-article").css("left",introArtLeftDisp);

  // Position featured-work article in featured-work
  var featWorkWidth = pixToNum($(".featured-work").css("width"));
  var featArtHeight = pixToNum($(".featured-work-article").css("height")),
      featArtWidth = pixToNum($(".featured-work-article").css("width"));
  var featArtTopDisp = numToPix(featWorkHeight/2 - featArtHeight/2),
      featArtLeftDisp = numToPix(featWorkWidth/2 - featArtWidth/2);
  $(".featured-work-article").css("top",featArtTopDisp);
  $(".featured-work-article").css("left",featArtLeftDisp);

  // Indent featured-work-title
  $("#featured-work-title h1").css("left",featArtLeftDisp);


  // On resizing of window...
  $(window).resize(function () {
    // Resize _____________ to a different height upon window resizing
    // introduction
    introHeight = numToPix(Math.round(0.75 * pixToNum($(".header").css("height"))));
    $(".introduction").css( "height", introHeight);
    // featured-work
    featWorkHeight = numToPix(Math.round(0.75 * pixToNum($(".header").css("height"))));
    $(".featured-work").css( "height", featWorkHeight);

    // Change position of Header Logo as window is resized
    var headerHeight = pixToNum($("#header").css("height")),
        headerWidth = pixToNum($("#header").css("width"));
    var headerImgHeight = pixToNum($("#header-logo").css("height")),
        headerImgWidth = pixToNum($("#header-logo").css("width"));
    var hLTopDisp = numToPix(headerHeight/2 - headerImgHeight/1.25),
        hLLeftDisp = numToPix(headerWidth/2 - headerImgWidth/2);
    $("#header-logo").css("top",hLTopDisp);
    $("#header-logo").css("left",hLLeftDisp);

    // Change position of introduction article as window is resized
    var introWidth = pixToNum($("#introduction").css("width"));
    var introArtHeight = pixToNum($("#introduction-article").css("height")),
        introArtWidth = pixToNum($("#introduction-article").css("width"));
    var introArtTopDisp = numToPix(pixToNum(introHeight)/2 - introArtHeight/2),
        introArtLeftDisp = numToPix(introWidth/2 - introArtWidth/2);
    $("#introduction-article").css("top",introArtTopDisp);
    $("#introduction-article").css("left",introArtLeftDisp);

    // Change position of featured-work article as window is resized
    var featWorkWidth = pixToNum($(".featured-work").css("width"));
    var featArtHeight = pixToNum($(".featured-work-article").css("height")),
        featArtWidth = pixToNum($(".featured-work-article").css("width"));
    var featArtTopDisp = numToPix(pixToNum(featWorkHeight)/2 - featArtHeight/2),
        featArtLeftDisp = numToPix(featWorkWidth/2 - featArtWidth/2);
    $(".featured-work-article").css("top",featArtTopDisp);
    $(".featured-work-article").css("left",featArtLeftDisp);

    // Change position of featured-work-title as window is resized
    $("#featured-work-title h1").css("left",featArtLeftDisp);
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


  // Change Text of button on hover
  var originalText,
      originalWidth;
  $(".button").hover(
    function() {
      originalText = $(this).text();
      originalWidth = $(this).css("width");
      $(this).css("width", originalWidth);
      $(this).text("Yes");
      // console.log("inside");
    }, function() {
      $(this).text(originalText);
    }
  );

});

// Update Later with Template Tag
// http://blog.teamtreehouse.com/creating-reusable-markup-with-the-html-template-element


// Animate in Font Awesome Logos
// $(document).ready(function() {
//     $("main").fadeIn(2000);
//     $("ul").animate({marginTop:"0px"}, 2500);
// });

// Send Email Button
// document.getElementById('email').onclick = function() {
//     window.open('mailto:olea.ismael@gmail.com');
// };
