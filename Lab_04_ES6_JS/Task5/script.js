$(document).ready(function () {

  let fontSize = 20;
  const $txt = $("#styledText");
  const $frame = $(".text-frame");

  // ── helpers ──────────────────────────────────────────
  function updateReadout() {
    const fw  = $txt.css("font-weight");
    const fs  = $txt.css("font-style");
    const td  = $txt.css("text-decoration-line") || $txt.css("text-decoration");
    const col = $txt.css("color");
    $("#styleReadout").text(
      "font-size: " + fontSize + "px" +
      (fw === "700" || fw === "bold" ? " | bold" : "") +
      (fs === "italic" ? " | italic" : "") +
      (td.includes("underline") ? " | underline" : "")
    );
  }

  function activateSwatch($btn) {
    $btn.closest(".swatch-row").find(".swatch").removeClass("active");
    $btn.addClass("active");
  }

  // ── Font Size ─────────────────────────────────────────
  $("#sizeUp").on("click", function () {
    fontSize = Math.min(fontSize + 4, 56);
    $txt.css("font-size", fontSize + "px");
    updateReadout();
  });

  $("#sizeDown").on("click", function () {
    fontSize = Math.max(fontSize - 4, 10);
    $txt.css("font-size", fontSize + "px");
    updateReadout();
  });

  $("#sizeReset").on("click", function () {
    fontSize = 20;
    $txt.css("font-size", "20px");
    updateReadout();
  });

  // ── Text Color ────────────────────────────────────────
  $("#colorCream").on("click", function () {
    $txt.css("color", "#f5ede0"); activateSwatch($(this)); updateReadout();
  });
  $("#colorTerra").on("click", function () {
    $txt.css("color", "#c0552a"); activateSwatch($(this)); updateReadout();
  });
  $("#colorGold").on("click", function () {
    $txt.css("color", "#c9972c"); activateSwatch($(this)); updateReadout();
  });
  $("#colorSlate").on("click", function () {
    $txt.css("color", "#2e3a4e"); activateSwatch($(this)); updateReadout();
  });
  $("#colorBlush").on("click", function () {
    $txt.css("color", "#d4748a"); activateSwatch($(this)); updateReadout();
  });

  // ── Background ────────────────────────────────────────
  $("#bgNone").on("click", function () {
    $frame.css("background", "#ffffff");
    activateSwatch($(this));
  });
  $("#bgDusk").on("click", function () {
    $frame.css("background", "linear-gradient(135deg, #1a0e2e, #2e1a0e)");
    activateSwatch($(this));
  });
  $("#bgSage").on("click", function () {
    $frame.css("background", "linear-gradient(135deg, #e8f0e4, #d4e8d0)");
    activateSwatch($(this));
  });
  $("#bgSunset").on("click", function () {
    $frame.css("background", "linear-gradient(135deg, #c0552a, #c9972c)");
    activateSwatch($(this));
  });

  // ── Style Toggles (chaining demo) ────────────────────
  $("#toggleBold").on("click", function () {
    const isBold = $txt.css("font-weight") === "700" || $txt.css("font-weight") === "bold";
    $txt.css("font-weight", isBold ? "400" : "700");
    $(this).toggleClass("active");
    updateReadout();
  });

  $("#toggleItalic").on("click", function () {
    const isItalic = $txt.css("font-style") === "italic";
    // jQuery chaining: change style + trigger brief flash
    $txt
      .css("font-style", isItalic ? "normal" : "italic")
      .fadeTo(80, 0.6)
      .fadeTo(200, 1);
    $(this).toggleClass("active");
    updateReadout();
  });

  $("#toggleUnder").on("click", function () {
    const isUnder = ($txt.css("text-decoration-line") || "").includes("underline");
    // jQuery chaining: change text-decoration + brief color pulse
    $txt
      .css("text-decoration", isUnder ? "none" : "underline")
      .fadeTo(80, 0.6)
      .fadeTo(200, 1);
    $(this).toggleClass("active");
    updateReadout();
  });

  // ── Reset All ─────────────────────────────────────────
  $("#resetAll").on("click", function () {
    fontSize = 20;
    // jQuery chaining to reset everything at once
    $txt
      .css("font-size",       "20px")
      .css("color",           "#1e140a")
      .css("font-weight",     "400")
      .css("font-style",      "normal")
      .css("text-decoration", "none")
      .fadeOut(200)
      .fadeIn(350);

    $frame.css("background", "#ffffff");
    $(".toggle").removeClass("active");
    $(".swatch").removeClass("active");
    updateReadout();
  });

});
