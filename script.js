const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const currentAnswer = question.nextElementSibling;
    const isActive = question.parentNode.classList.contains("active");

    // Close all other answers
    questions.forEach((q) => {
      const answer = q.nextElementSibling;
      if (q !== question && answer.style.display === "block") {
        q.parentNode.classList.remove("active");
        answer.style.display = "none";
      }
    });

    // Toggle the clicked question's answer
    if (isActive) {
      question.parentNode.classList.remove("active");
      currentAnswer.style.display = "none";
    } else {
      question.parentNode.classList.add("active");
      currentAnswer.style.display = "block";
    }
  });
});

