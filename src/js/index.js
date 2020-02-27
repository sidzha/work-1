let $div1 = $(".page-main-2__features"),
  $div2 = $(".page-main-2__price"),
  currentDiv = "div1",
  $button = $(".theme-switch__input"),
  $firstSpan = $(".js-first"),
  $secondSpan = $(".js-second");

$div2.hide();

$($button).on("click", function() {
  $div1.toggle("slide", { direction: "left" }, "medium");
  $div2.toggle("slide", { direction: "right" }, "medium");
  currentDiv = currentDiv === "div1" ? "div2" : "div1";
  $firstSpan.toggleClass("dark");
  $secondSpan.toggleClass("light");
});

$(document).on("click", function(e) {
  if (
    $(e.target).hasClass("btn-contacts") ||
    $(e.target).hasClass("btn-contacts-img")
  ) {
    if ($(".contacts-container").hasClass("active")) {
      closeAll();
      return;
    }
    closeAll();
    $(".contacts-container").addClass("active");
    $(".contacts-item").addClass("active");
    return;
  }

  closeAll();
});

function closeAll() {
  $(".contacts-container").removeClass("active");
  $(".contacts-item").removeClass("active");
}
