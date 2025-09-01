// ==========================
// Part 1: Variables, Data Types, Conditionals
// ==========================
let userAge; // variable declaration

document.getElementById("checkAgeBtn").addEventListener("click", () => {
  userAge = document.getElementById("ageInput").value;

  if (userAge >= 18) {
    document.getElementById("ageResult").textContent = "✅ You are an adult.";
  } else if (userAge > 0) {
    document.getElementById("ageResult").textContent = "👶 You are underage.";
  } else {
    document.getElementById("ageResult").textContent = "⚠️ Please enter a valid age.";
  }
});

// ==========================
// Part 2: Functions
// ==========================
// Custom function: calculate sum
function calculateSum(a, b) {
  return a + b;
}

// Custom function: format result string
function formatMessage(message) {
  return `👉 Result: ${message}`;
}

document.getElementById("sumBtn").addEventListener("click", () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  let sum = calculateSum(num1, num2);
  document.getElementById("calcResult").textContent = formatMessage(sum);
});

// ==========================
// Part 3: Loops
// ==========================
document.getElementById("generateNumbersBtn").addEventListener("click", () => {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear old list

  // Example 1: For loop
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number: ${i}`;
    list.appendChild(li);
  }

  // Example 2: While loop (countdown)
  let countdown = 3;
  while (countdown > 0) {
    console.log("Countdown:", countdown);
    countdown--;
  }
});

// ==========================
// Part 4: DOM Interactions
// ==========================
// 1. Update text content (done above in checkAge & calculator)
// 2. Create elements dynamically (done in number list generator)
// 3. Listen for click events (done on all buttons)

// Extra: Toggle background color
document.body.addEventListener("dblclick", () => {
  document.body.classList.toggle("dark-mode");
});