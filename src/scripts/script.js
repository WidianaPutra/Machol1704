// navbar start
$(".open").click(() => {
  $(".list-item").css({
    transform: "translateX(0%)",
  });
});

$(".close").click(() => {
  $(".list-item").css({
    transform: "translateX(100%)",
  });
});
// navbar end

// home start
$(".contain").css({
  scale: "100%",
});
// home end

// card start
$(window).scroll(function () {
  $(".card").each(function () {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (imagePos < topOfWindow + windowHeight && imagePos >= topOfWindow) {
      $(this).css({ scale: "100%" });
    }
  });
});
// card end

$(".controll-page").css({
  zIndex: 10,
});
