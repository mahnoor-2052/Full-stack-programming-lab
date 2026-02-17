function checkQuiz() {
  let score = 0;

  let ans1 = document.getElementById("q1").value;
  let ans2 = document.getElementById("q2").value;
  let ans3 = document.getElementById("q3").value;

  if (ans1 == 4) score++;
  if (ans2.toLowerCase() === "islamabad") score++;
  if (ans3.toLowerCase() === "web development") score++;

  let result = document.getElementById("result");

  if (score === 3) {
    result.innerText = "Excellent! Score: " + score;
  } else if (score === 2) {
    result.innerText = "Good! Score: " + score;
  } else {
    result.innerText = "Try Again! Score: " + score;
  }
}

function resetQuiz() {
  document.getElementById("q1").value = "";
  document.getElementById("q2").value = "";
  document.getElementById("q3").value = "";
  document.getElementById("result").innerText = "";
}
