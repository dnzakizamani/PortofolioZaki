// event pada saat link di kklik
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");

  // tangkap elemen ybs
  var elementujuan = $(tujuan);

  // pindahkan scroll
  $("html, body").animate(
    {
      scrollTop: elementujuan.offset().top - 50,
    },
    1250,
    "easeInOutExpo"
  );

  e.preventDefault();
});

// parallax

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // jumbotron
  //   $(".jumbotron img").css({
  //     transform: "translate(0px, " + wScroll / 6 + "%)",
  //   });
  //   $(".jumbotron h1").css({
  //     transform: "translate(0px, " + wScroll / 4 + "%)",
  //   });
  //   $(".jumbotron p").css({
  //     transform: "translate(0px, " + wScroll / 2 + "%)",
  //   });

  // portfolio
  if (wScroll > $(".portfolio").offset().top - 340) {
    $(".portfolio .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".portfolio .thumbnail").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }

  // about
  if (wScroll > $(".about").offset().top - 300) {
    $(".pKiri").each(function () {
      $(".pKiri").addClass("pMuncul");
    });
    $(".pKanan").each(function () {
      $(".pKanan").addClass("pMuncul");
    });
  }
});
