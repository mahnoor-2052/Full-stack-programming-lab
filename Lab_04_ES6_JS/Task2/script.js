$(document).ready(function () {

  const captions = ["Alpine Lake", "Misty Forest", "Desert Dunes", "City Night", "Ocean Waves"];
  let current = 0;
  const $slides = $(".slide");
  const total = $slides.length;

  // Build dots
  for (let i = 0; i < total; i++) {
    const $dot = $("<div class='dot'></div>");
    if (i === 0) $dot.addClass("active");
    $dot.on("click", function () { goTo(i); });
    $("#dots").append($dot);
  }

  function goTo(index) {
    if (index === current) return;
    const $dots = $(".dot");

    $slides.eq(current).fadeOut(350);
    $dots.eq(current).removeClass("active");

    current = (index + total) % total;

    $slides.eq(current).fadeIn(400);
    $dots.eq(current).addClass("active");

    $("#caption").fadeOut(200, function () {
      $(this).text(captions[current]).fadeIn(300);
    });
  }

  $("#prevBtn").on("click", function () { goTo(current - 1); });
  $("#nextBtn").on("click", function () { goTo(current + 1); });

  // Keyboard navigation
  $(document).on("keydown", function (e) {
    if (e.key === "ArrowLeft")  goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
  });

  // Auto-play every 4s
  setInterval(function () { goTo(current + 1); }, 4000);

});
