// this file for parallax effect in page

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

// home start
$(".contain").css({
  scale: "100%",
});

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

$(".controll-page").css({
  zIndex: 10,
});
