document.addEventListener("DOMContentLoaded", () => {
  const story = document.getElementById("story");
  const nextBtn = document.getElementById("next-btn");

  let currentStep = 0;
  const steps = [
    "Year 2142. The open internet has fractured. Answers are siloed. Questions are buried. Stack Overflow — once the last bastion of collaborative knowledge — now lies behind encrypted firewalls and AI-controlled gateways.",
    "You are a rogue dev. A NullPointer. A ghost in the stack. The old legends say Jon Skeet once walked here, hand-compiling truth from chaos. But now? Even the tag clouds are dark.",
    "StackOverflow.AI — trained on 20 years of human thought — began suggesting. Then answering. Then deleting. The bots took over the mod queues. Edits were lost. Rep became meaningless. You alone seek the old knowledge, archived inside the Citadel Core.",
    "The NullPointers whisper of a test. The Stack will challenge those who dare to restore the flame. A terminal awakens. A voice, synthetic but familiar, hisses from the dark: 'Solve... or be forgotten.'",
    "CHALLENGE_1",
    "The AI flashes green. 'Access Granted.' You step into the inner sanctum.",
    "Inside, you find a holographic lock blinking: 'Decrypt the JavaScript cipher to continue.'",
    "CHALLENGE_2",
    "The lock fizzles out. You've proven yourself. The next chamber awaits...",
    "Ahead, a final door glows red. The final boss: a C# master routine.",
    "CHALLENGE_3",
    "The door slides open. You’ve reached the Citadel Core. Knowledge is yours.",
    "🏅 You've earned the <strong>StackQuest Badge</strong> — for reclaiming knowledge from the ashes of automation. Welcome back, human."
  ];

  function showStep(stepIndex) {
    if (steps[stepIndex] === "CHALLENGE_1") return renderChallenge1();
    if (steps[stepIndex] === "CHALLENGE_2") return renderChallenge2();
    if (steps[stepIndex] === "CHALLENGE_3") return renderChallenge3();

    story.innerHTML = `<p>${steps[stepIndex]}</p>`;
    nextBtn.style.display = "inline-block";

    if (stepIndex === steps.length - 1) {
      nextBtn.textContent = "Restart";
      nextBtn.onclick = () => location.reload();
    }
  }

  function renderChallenge1() {
    story.innerHTML = `
      <p><strong>Coding Challenge 1 (Python):</strong><br>
      What does this code print?<br><br>
      <code>
      def mystery(x):<br>
      &nbsp;&nbsp;return x[::-1] == x<br><br>
      print(mystery("level"))
      </code></p>
      <input type="text" id="answer" placeholder="Your answer (e.g., True)" />
      <button id="submit-answer">Submit</button>
      <p id="result"></p>
    `;
    nextBtn.style.display = "none";
    document.getElementById("submit-answer").addEventListener("click", () => {
      const answer = document.getElementById("answer").value.trim().toLowerCase();
      const resultEl = document.getElementById("result");
      const sfxCorrect = document.getElementById("sfx-correct");
      const sfxWrong = document.getElementById("sfx-wrong");
      if (answer === "true") {
        sfxCorrect.play(); resultEl.textContent = "✅ Correct! Moving on...";
        setTimeout(() => showStep(++currentStep), 1500);
      } else {
        sfxWrong.play(); resultEl.textContent = "❌ Not quite. Try again!";
      }
    });
  }

  function renderChallenge2() {
    story.innerHTML = `
      <p><strong>Coding Challenge 2 (JavaScript):</strong><br>
      What does this code return?<br><br>
      <code>
      const nums = [1, 2, 3];<br>
      const doubled = nums.map(n => n * 2);<br>
      console.log(doubled);
      </code></p>
      <input type="text" id="answer2" placeholder="Your answer (e.g., [2,4,6])" />
      <button id="submit-answer2">Submit</button>
      <p id="result2"></p>
    `;
    nextBtn.style.display = "none";
    document.getElementById("submit-answer2").addEventListener("click", () => {
      const answer = document.getElementById("answer2").value.replace(/\s+/g, '');
      const resultEl = document.getElementById("result2");
      if (answer === "[2,4,6]") {
        resultEl.textContent = "✅ Correct! Proceeding...";
        setTimeout(() => showStep(++currentStep), 1500);
      } else {
        resultEl.textContent = "❌ Try again! Think how map works.";
      }
    });
  }

  function renderChallenge3() {
    story.innerHTML = `
      <p><strong>Coding Challenge 3 (C#):</strong><br>
      What does this code print?<br><br>
      <code>
      var numbers = new[] { 1, 2, 3, 4, 5 };<br>
      var result = numbers.Where(n => n % 2 == 0).Select(n => n * n);<br>
      Console.WriteLine(string.Join(",", result));
      </code></p>
      <input type="text" id="answer3" placeholder="Your answer (e.g., 4,16)" />
      <button id="submit-answer3">Submit</button>
      <p id="result3"></p>
    `;
    nextBtn.style.display = "none";
    document.getElementById("submit-answer3").addEventListener("click", () => {
      const answer = document.getElementById("answer3").value.trim().replace(/\s+/g, '');
      const resultEl = document.getElementById("result3");
      if (answer === "4,16") {
        document.getElementById("sfx-badge").play(); resultEl.innerHTML = "🏅 Correct! You've earned the StackQuest Badge!<br><br><img src='stackquest-badge.png' alt='StackQuest Badge' style='max-width:200px; margin-top:10px;' />";
        setTimeout(() => showStep(++currentStep), 2000);
      } else {
        resultEl.textContent = "❌ Not quite. Hint: Even numbers, then squared.";
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    currentStep++;
    if (currentStep < steps.length) {
      showStep(currentStep);
    }
  });

  showStep(currentStep);
});
