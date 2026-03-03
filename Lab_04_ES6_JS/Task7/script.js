$(document).ready(function () {

  let dragItem = null;

  function updateBadges() {
    $("#sortList li").each(function (i) {
      $(this).find(".order-badge").text(i + 1);
    });
    const order = $("#sortList li").map(function () {
      return $(this).data("id");
    }).get().join(", ");
    $("#orderText").text(order);
  }

  // Drag events using native HTML5 drag API via jQuery
  $("#sortList").on("dragstart", "li", function (e) {
    dragItem = this;
    setTimeout(() => $(this).addClass("dragging"), 0);
    e.originalEvent.dataTransfer.effectAllowed = "move";
  });

  $("#sortList").on("dragend", "li", function () {
    $(this).removeClass("dragging");
    $(".drag-over").removeClass("drag-over");
    dragItem = null;
    updateBadges();
  });

  $("#sortList").on("dragover", "li", function (e) {
    e.preventDefault();
    e.originalEvent.dataTransfer.dropEffect = "move";
    if (this === dragItem) return;
    $(".drag-over").removeClass("drag-over");
    $(this).addClass("drag-over");
  });

  $("#sortList").on("dragleave", "li", function () {
    $(this).removeClass("drag-over");
  });

  $("#sortList").on("drop", "li", function (e) {
    e.preventDefault();
    if (this === dragItem) return;
    const $target = $(this);
    const $dragging = $(dragItem);

    const targetIndex = $target.index();
    const draggingIndex = $dragging.index();

    if (draggingIndex < targetIndex) {
      $dragging.insertAfter($target);
    } else {
      $dragging.insertBefore($target);
    }
    $(this).removeClass("drag-over");
    updateBadges();
  });

  // Make items draggable
  $("#sortList li").attr("draggable", "true");

});
