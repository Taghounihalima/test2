$(document).ready(function () {
  $(".hero-logos .logo").hover(
    function () {
      $(this).find("p").css("color", "blue");
      $(this).find("svg circle").css("fill", "blue");
    },
    function () {
      $(this).find("p").css("color", "white");
      $(this).find("svg circle").css("fill", "white");
    }
  );
});

$(document).ready(function () {
  $(".composent").hover(
    function () {
      $(this).addClass("hovered");
    },
    function () {
      $(this).removeClass("hovered");
    }
  );
});
