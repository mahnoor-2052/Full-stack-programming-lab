$(document).ready(function () {

  $(".tab-btn").on("click", function () {
    const target = $(this).data("tab");

    // Update active tab button
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");

    // Switch content
    $(".tab-content").removeClass("active").hide();
    $("#tab-" + target).addClass("active").show();

    // Smooth scroll to the tab section
    $("html, body").animate({
      scrollTop: $("#tabSection").offset().top - 30
    }, 500);
  });

});
