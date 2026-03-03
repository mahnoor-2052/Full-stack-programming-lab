$(document).ready(function () {

  const questions = [
    { q: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Machine Language", "HyperTool Markup Language"], answer: 0 },
    { q: "Which CSS property controls text size?", options: ["font-style", "text-size", "font-size", "text-font"], answer: 2 },
    { q: "Which keyword declares a variable in ES6?", options: ["var", "let", "const", "Both let & const"], answer: 3 },
    { q: "What does DOM stand for?", options: ["Document Object Model", "Data Output Mode", "Document Order Manager", "Dynamic Object Module"], answer: 0 },
    { q: "Which jQuery method hides an element?", options: [".remove()", ".hide()", ".invisible()", ".collapse()"], answer: 1 },
    { q: "What does Ajax stand for?", options: ["Advanced JavaScript and XML", "Asynchronous JavaScript and XML", "Async Java Action X", "Active JSON and XML"], answer: 1 },
    { q: "Which HTML tag creates a hyperlink?", options: ["<link>", "<href>", "<a>", "<url>"], answer: 2 },
    { q: "What does CSS stand for?", options: ["Computer Style Sheets", "Creative Style Syntax", "Cascading Style Sheets", "Colorful Style Sets"], answer: 2 },
    { q: "Which method fetches JSON data in jQuery?", options: ["$.load()", "$.json()", "$.get()", "$.fetch()"], answer: 2 },
    { q: "Which of the following is a JavaScript library?", options: ["Django", "Laravel", "jQuery", "Bootstrap"], answer: 2 }
  ];

  let current = 0;
  let score = 0;
  let answered = false;

  function loadQuestion() {
    const qData = questions[current];
    answered = false;

    $("#qNum").text("Q" + (current + 1));
    $("#progFill").css("width", ((current / questions.length) * 100) + "%");
    $("#qText").text(qData.q);
    $("#options").empty();
    $("#nextBtn").hide();

    qData.options.forEach(function (opt, i) {
      const $btn = $("<button class='option-btn'></button>").text(opt);
      $btn.on("click", function () {
        if (answered) return;
        answered = true;
        $(".option-btn").prop("disabled", true);

        if (i === qData.answer) {
          $(this).addClass("correct");
          score++;
          $("#scoreTrack").text(score);
        } else {
          $(this).addClass("wrong");
          $(".option-btn").eq(qData.answer).addClass("correct");
        }
        $("#nextBtn").fadeIn(300);
      });
      $("#options").append($btn);
    });

    // Animate in
    $(".q-card").hide().fadeIn(350);
  }

  function showResult() {
    $("#quizScreen").fadeOut(300, function () {
      $("#resultScreen").fadeIn(400);
    });
    $("#finalScore").text(score);
    $("#progFill").css("width", "100%");

    if (score === 10) { $("#resultIcon").text("🏆"); $("#resultTitle").text("Perfect!"); $("#resultMsg").text("You answered every question correctly!"); }
    else if (score >= 7) { $("#resultIcon").text("🎉"); $("#resultTitle").text("Excellent!"); $("#resultMsg").text("Great job — you really know your web dev!"); }
    else if (score >= 5) { $("#resultIcon").text("👍"); $("#resultTitle").text("Good Work!"); $("#resultMsg").text("Nice effort — keep practicing!"); }
    else { $("#resultIcon").text("📚"); $("#resultTitle").text("Keep Studying!"); $("#resultMsg").text("Review the material and try again!"); }
  }

  $("#startBtn").on("click", function () {
    $("#startScreen").fadeOut(300, function () {
      $("#quizScreen").fadeIn(400);
      loadQuestion();
    });
  });

  $("#nextBtn").on("click", function () {
    current++;
    if (current < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });

  $("#restartBtn").on("click", function () {
    current = 0; score = 0;
    $("#scoreTrack").text(0);
    $("#resultScreen").fadeOut(300, function () {
      $("#startScreen").fadeIn(400);
    });
  });

});
