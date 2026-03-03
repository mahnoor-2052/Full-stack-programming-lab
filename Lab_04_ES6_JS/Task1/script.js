$(document).ready(function () {

  function updateCount() {
    const n = $("#itemList li:not(.empty-state)").length;
    $("#count").text(n);
  }

  function addItem() {
    const val = $("#itemInput").val().trim();
    if (!val) {
      // Shake the input card
      $(".input-card").css("animation", "none");
      setTimeout(function () {
        $(".input-card").css({
          "outline": "2px solid #e8a0a8",
          "outline-offset": "2px"
        });
        setTimeout(() => $(".input-card").css({ "outline": "", "outline-offset": "" }), 600);
      }, 10);
      $("#itemInput").focus();
      return;
    }

    // Remove empty state
    $(".empty-state").remove();

    const $li   = $("<li></li>");
    const $dot  = $("<span class='item-dot'></span>");
    const $text = $("<span class='item-text'></span>").text(val);
    const $del  = $("<button class='del-btn' title='Delete'>✕</button>");

    $del.on("click", function () {
      $(this).closest("li").animate({ opacity: 0, height: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 }, 220, function () {
        $(this).remove();
        if ($("#itemList li").length === 0) {
          $("#itemList").append(
            "<li class='empty-state'><span class='empty-icon'>✦</span><span>Nothing here yet — add your first item above.</span></li>"
          );
        }
        updateCount();
      });
    });

    $li.append($dot).append($text).append($del);
    $("#itemList").append($li);
    $("#itemInput").val("").focus();
    updateCount();
  }

  $("#addBtn").on("click", addItem);

  $("#itemInput").on("keypress", function (e) {
    if (e.key === "Enter") addItem();
  });

});
