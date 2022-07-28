// discourse-skip-module

(function ($) {
  $(".mobile-toggle").on("click", function () {
    $("body").toggleClass("menu-visible");
  });

  $("ul.menu").on("scroll", function () {
    $("body").toggleClass("scrolled", $("ul.menu").scrollTop() > 0);
  });
})(jQuery); // eslint-disable-line
