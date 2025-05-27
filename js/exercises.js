const exercises = [
  { name: "Assisted Dip", equipment: "Machine", bodyPart: "Chest" },
  { name: "Band-Assisted Bench Press", equipment: "Resistance Band", bodyPart: "Chest" },
  { name: "Bar Dip", equipment: "Bodyweight", bodyPart: "Chest" },
  { name: "Bench Press", equipment: "Barbell", bodyPart: "Chest" },
  { name: "Bench Press Against Band", equipment: "Resistance Band", bodyPart: "Chest" },
  { name: "Board Press", equipment: "Barbell", bodyPart: "Chest" },
  { name: "Cable Chest Press", equipment: "Cable", bodyPart: "Chest" },
  { name: "Close-Grip Bench Press", equipment: "Barbell", bodyPart: "Chest" },
  { name: "Close-Grip Feet-Up Bench Press", equipment: "Barbell", bodyPart: "Chest" },
  { name: "Decline Bench Press", equipment: "Barbell", bodyPart: "Chest" },
  { name: "Decline Push-Up", equipment: "Bodyweight", bodyPart: "Chest" },
  { name: "Dumbbell Chest Fly", equipment: "Dumbbell", bodyPart: "Chest" },
  { name: "Dumbbell Chest Press", equipment: "Dumbbell", bodyPart: "Chest" },
  { name: "Dumbbell Decline Chest Press", equipment: "Dumbbell", bodyPart: "Chest" },
  { name: "Dumbbell Floor Press", equipment: "Dumbbell", bodyPart: "Chest" },
  { name: "Dumbbell Pullover", equipment: "Dumbbell", bodyPart: "Chest" },
  { name: "Feet-Up Bench Press", equipment: "Barbell", bodyPart: "Chest" },
  { name: "Floor Press", equipment: "Barbell", bodyPart: "Chest" },
  { name: "Incline Bench Press", equipment: "Barbell", bodyPart: "Chest" },
  { name: "Incline Dumbbell Press", equipment: "Dumbbell", bodyPart: "Chest" },
  { name: "Incline Push-Up", equipment: "Bodyweight", bodyPart: "Chest" },
  { name: "Kettlebell Floor Press", equipment: "Kettlebell", bodyPart: "Chest" },
  { name: "Kneeling Incline Push-Up", equipment: "Bodyweight", bodyPart: "Chest" },
  { name: "Kneeling Push-Up", equipment: "Bodyweight", bodyPart: "Chest" },
  { name: "Machine Chest Fly", equipment: "Machine", bodyPart: "Chest" },
  { name: "Machine Chest Press", equipment: "Machine", bodyPart: "Chest" },
  { name: "Pec Deck", equipment: "Machine", bodyPart: "Chest" },
  { name: "Pin Bench Press", equipment: "Barbell", bodyPart: "Chest" },
  { name: "Push-Up", equipment: "Bodyweight", bodyPart: "Chest" },
  { name: "Push-Up Against Wall", equipment: "Bodyweight", bodyPart: "Chest" },
  { name: "Push-Ups With Feet in Rings", equipment: "Bodyweight", bodyPart: "Chest" },
  { name: "Resistance Band Chest Fly", equipment: "Resistance Band", bodyPart: "Chest" },
  { name: "Ring Dip", equipment: "Rings", bodyPart: "Chest" },
  { name: "Smith Machine Bench Press", equipment: "Smith Machine", bodyPart: "Chest" },
  { name: "Smith Machine Incline Bench Press", equipment: "Smith Machine", bodyPart: "Chest" },
  { name: "Smith Machine Reverse Grip Bench Press", equipment: "Smith Machine", bodyPart: "Chest" },
  { name: "Standing Cable Chest Fly", equipment: "Cable", bodyPart: "Chest" },
  { name: "Standing Resistance Band Chest Fly", equipment: "Resistance Band", bodyPart: "Chest" },
  { name: "Arnold Press", equipment: "Dumbbell", bodyPart: "Shoulders" },
  { name: "Band External Shoulder Rotation", equipment: "Resistance Band", bodyPart: "Shoulders" },
  { name: "Band Internal Shoulder Rotation", equipment: "Resistance Band", bodyPart: "Shoulders" },
  { name: "Band Pull-Apart", equipment: "Resistance Band", bodyPart: "Shoulders" },
  { name: "Banded Face Pull", equipment: "Resistance Band", bodyPart: "Shoulders" },
  { name: "Barbell Front Raise", equipment: "Barbell", bodyPart: "Shoulders" },
  { name: "Barbell Rear Delt Row", equipment: "Barbell", bodyPart: "Shoulders" },
  { name: "Barbell Upright Row", equipment: "Barbell", bodyPart: "Shoulders" },
  { name: "Behind the Neck Press", equipment: "Barbell", bodyPart: "Shoulders" },
  { name: "Cable Internal Shoulder Rotation", equipment: "Cable", bodyPart: "Shoulders" },
  { name: "Cable Front Raise", equipment: "Cable", bodyPart: "Shoulders" },
  { name: "Cable Lateral Raise", equipment: "Cable", bodyPart: "Shoulders" },
  { name: "Cable Rear Delt Row", equipment: "Cable", bodyPart: "Shoulders" },
  { name: "Cuban Press", equipment: "Dumbbell", bodyPart: "Shoulders" },
  { name: "Devils Press", equipment: "Dumbbell", bodyPart: "Shoulders" },
  { name: "Dumbbell Front Raise", equipment: "Dumbbell", bodyPart: "Shoulders" },
  { name: "Dumbbell Horizontal Internal Shoulder Rotation", equipment: "Dumbbell", bodyPart: "Shoulders" },
  { name: "Dumbbell Horizontal External Shoulder Rotation", equipment: "Dumbbell", bodyPart: "Shoulders" },
  { name: "Dumbbell Lateral Raise", equipment: "Dumbbell", bodyPart: "Shoulders" },
  { name: "Dumbbell Rear Delt Row", equipment: "Dumbbell", bodyPart: "Shoulders" },
  { name: "Dumbbell Shoulder Press", equipment: "Dumbbell", bodyPart: "Shoulders" },
  { name: "Face Pull", equipment: "Cable", bodyPart: "Shoulders" },
  { name: "Front Hold", equipment: "Plate", bodyPart: "Shoulders" },
  { name: "Handstand Push-Up", equipment: "Bodyweight", bodyPart: "Shoulders" },
  { name: "Jerk", equipment: "Barbell", bodyPart: "Shoulders" },
  { name: "Kettlebell Halo", equipment: "Kettlebell", bodyPart: "Shoulders" },
  { name: "Landmine Press", equipment: "Landmine", bodyPart: "Shoulders" },
  { name: "Lying Dumbbell External Shoulder Rotation", equipment: "Dumbbell", bodyPart: "Shoulders" },
  { name: "Lying Dumbbell Internal Shoulder Rotation", equipment: "Dumbbell", bodyPart: "Shoulders" },
  { name: "Machine Lateral Raise", equipment: "Machine", bodyPart: "Shoulders" },
  { name: "Machine Shoulder Press", equipment: "Machine", bodyPart: "Shoulders" },
  { name: "Monkey Row", equipment: "Dumbbell", bodyPart: "Shoulders" },
  { name: "One-Arm Landmine Press", equipment: "Landmine", bodyPart: "Shoulders" },
  { name: "Overhead Press", equipment: "Barbell", bodyPart: "Shoulders" },
  { name: "Plate Front Raise", equipment: "Plate", bodyPart: "Shoulders" },
  { name: "Power Jerk", equipment: "Barbell", bodyPart: "Shoulders" },
  { name: "Push Press", equipment: "Barbell", bodyPart: "Shoulders" },
  { name: "Reverse Cable Flyes", equipment: "Cable", bodyPart: "Shoulders" },
  { name: "Reverse Dumbbell Flyes", equipment: "Dumbbell", bodyPart: "Shoulders" },
  { name: "Reverse Machine Fly", equipment: "Machine", bodyPart: "Shoulders" },
  { name: "Seated Dumbbell Shoulder Press", equipment: "Dumbbell", bodyPart: "Shoulders" },
  { name: "Seated Barbell Overhead Press", equipment: "Barbell", bodyPart: "Shoulders" },
  { name: "Seated Smith Machine Shoulder Press", equipment: "Smith Machine", bodyPart: "Shoulders" },
  { name: "Snatch Grip Behind the Neck Press", equipment: "Barbell", bodyPart: "Shoulders" },
  { name: "Squat Jerk", equipment: "Barbell", bodyPart: "Shoulders" },
  { name: "Split Jerk", equipment: "Barbell", bodyPart: "Shoulders" },
  { name: "Wall Walk", equipment: "Bodyweight", bodyPart: "Shoulders" },
  { name: "Air Squat", equipment: "Bodyweight", bodyPart: "Legs" },
  { name: "Barbell Hack Squat", equipment: "Barbell", bodyPart: "Legs" },
  { name: "Barbell Lunge", equipment: "Barbell", bodyPart: "Legs" },
  { name: "Barbell Walking Lunge", equipment: "Barbell", bodyPart: "Legs" },
  { name: "Belt Squat", equipment: "Belt", bodyPart: "Legs" },
  { name: "Body Weight Lunge", equipment: "Bodyweight", bodyPart: "Legs" },
  { name: "Bodyweight Leg Curl", equipment: "Bodyweight", bodyPart: "Legs" },
  { name: "Box Jump", equipment: "Bodyweight", bodyPart: "Legs" },
  { name: "Box Squat", equipment: "Barbell", bodyPart: "Legs" },
  { name: "Bulgarian Split Squat", equipment: "Bodyweight", bodyPart: "Legs" },
  { name: "Chair Squat", equipment: "Bodyweight", bodyPart: "Legs" },
  { name: "Dumbbell Lunge", equipment: "Dumbbell", bodyPart: "Legs" },
  { name: "Dumbbell Squat", equipment: "Dumbbell", bodyPart: "Legs" },
  { name: "Front Squat", equipment: "Barbell", bodyPart: "Legs" },
  { name: "Glute Ham Raise", equipment: "Machine", bodyPart: "Legs" },
  { name: "Goblet Squat", equipment: "Dumbbell", bodyPart: "Legs" },
  { name: "Hack Squat Machine", equipment: "Machine", bodyPart: "Legs" },
  { name: "Half Air Squat", equipment: "Bodyweight", bodyPart: "Legs" },
  { name: "Hip Adduction Machine", equipment: "Machine", bodyPart: "Legs" },
  { name: "Jumping Lunge", equipment: "Bodyweight", bodyPart: "Legs" },
  { name: "Landmine Hack Squat", equipment: "Landmine", bodyPart: "Legs" },
  { name: "Landmine Squat", equipment: "Landmine", bodyPart: "Legs" },
  { name: "Leg Curl On Ball", equipment: "Ball", bodyPart: "Legs" },
  { name: "Leg Extension", equipment: "Machine", bodyPart: "Legs" },
  { name: "Leg Press", equipment: "Machine", bodyPart: "Legs" },
  { name: "Lying Leg Curl", equipment: "Machine", bodyPart: "Legs" },
  { name: "Nordic Hamstring Eccentric", equipment: "Bodyweight", bodyPart: "Legs" },
  { name: "One-Legged Leg Extension", equipment: "Machine", bodyPart: "Legs" },
  { name: "One-Legged Lying Leg Curl", equipment: "Machine", bodyPart: "Legs" },
  { name: "One-Legged Seated Leg Curl", equipment: "Machine", bodyPart: "Legs" },
  { name: "Pause Squat", equipment: "Barbell", bodyPart: "Legs" },
  { name: "Pistol Squat", equipment: "Bodyweight", bodyPart: "Legs" },
  { name: "Reverse Barbell Lunge", equipment: "Barbell", bodyPart: "Legs" },
  { name: "Reverse Body Weight Lunge", equipment: "Bodyweight", bodyPart: "Legs" },
  { name: "Reverse Dumbbell Lunge", equipment: "Dumbbell", bodyPart: "Legs" },
  { name: "Romanian Deadlift", equipment: "Barbell", bodyPart: "Legs" },
  { name: "Safety Bar Squat", equipment: "Barbell", bodyPart: "Legs" },
  { name: "Seated Leg Curl", equipment: "Machine", bodyPart: "Legs" },
  { name: "Shallow Body Weight Lunge", equipment: "Bodyweight", bodyPart: "Legs" },
  { name: "Side Lunges (Bodyweight)", equipment: "Bodyweight", bodyPart: "Legs" },
  { name: "Smith Machine Bulgarian Split Squat", equipment: "Smith Machine", bodyPart: "Legs" },
  { name: "Smith Machine Front Squat", equipment: "Smith Machine", bodyPart: "Legs" },
  { name: "Smith Machine Squat", equipment: "Smith Machine", bodyPart: "Legs" },
  { name: "Squat", equipment: "Barbell", bodyPart: "Legs" },
  { name: "Step Up", equipment: "Bodyweight", bodyPart: "Legs" },
  { name: "Zercher Squat", equipment: "Barbell", bodyPart: "Legs" },
  { name: "Zombie Squat", equipment: "Barbell", bodyPart: "Legs" },
  { name: "Banded Side Kicks", equipment: "Resistance Band", bodyPart: "Glutes" },
  { name: "Cable Pull Through", equipment: "Cable", bodyPart: "Glutes" },
  { name: "Cable Machine Hip Abduction", equipment: "Cable", bodyPart: "Glutes" },
  { name: "Clamshells", equipment: "Bodyweight", bodyPart: "Glutes" },
  { name: "Cossack Squat", equipment: "Bodyweight", bodyPart: "Glutes" },
  { name: "Death March with Dumbbells", equipment: "Dumbbell", bodyPart: "Glutes" },
  { name: "Donkey Kicks", equipment: "Bodyweight", bodyPart: "Glutes" },
  { name: "Dumbbell Romanian Deadlift", equipment: "Dumbbell", bodyPart: "Glutes" },
  { name: "Dumbbell Frog Pumps", equipment: "Dumbbell", bodyPart: "Glutes" },
  { name: "Fire Hydrants", equipment: "Bodyweight", bodyPart: "Glutes" },
  { name: "Frog Pumps", equipment: "Bodyweight", bodyPart: "Glutes" },
  { name: "Glute Bridge", equipment: "Bodyweight", bodyPart: "Glutes" },
  { name: "Hip Abduction Against Band", equipment: "Resistance Band", bodyPart: "Glutes" },
  { name: "Hip Abduction Machine", equipment: "Machine", bodyPart: "Glutes" },
  { name: "Hip Thrust", equipment: "Barbell", bodyPart: "Glutes" },
  { name: "Hip Thrust Machine", equipment: "Machine", bodyPart: "Glutes" },
  { name: "Hip Thrust With Band Around Knees", equipment: "Barbell + Band", bodyPart: "Glutes" },
  { name: "Lateral Walk With Band", equipment: "Resistance Band", bodyPart: "Glutes" },
  { name: "Machine Glute Kickbacks", equipment: "Machine", bodyPart: "Glutes" },
  { name: "One-Legged Glute Bridge", equipment: "Bodyweight", bodyPart: "Glutes" },
  { name: "One-Legged Hip Thrust", equipment: "Bodyweight", bodyPart: "Glutes" },
  { name: "Reverse Hyperextension", equipment: "Machine", bodyPart: "Glutes" },
  { name: "Romanian Deadlift", equipment: "Barbell", bodyPart: "Glutes" },
  { name: "Smith Machine Hip Thrust", equipment: "Smith Machine", bodyPart: "Glutes" },
  { name: "Single Leg Romanian Deadlift", equipment: "Dumbbell", bodyPart: "Glutes" },
  { name: "Standing Glute Kickback in Machine", equipment: "Machine", bodyPart: "Glutes" },
  { name: "Standing Glute Push Down", equipment: "Cable", bodyPart: "Glutes" },
  { name: "Step Up", equipment: "Bodyweight", bodyPart: "Glutes" },
  { name: "Ball Slams", equipment: "Medicine Ball", bodyPart: "Abs" },
  { name: "Cable Crunch", equipment: "Cable", bodyPart: "Abs" },
  { name: "Core Twist", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Crunch", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Dead Bug", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Dead Bug With Dumbbells", equipment: "Dumbbell", bodyPart: "Abs" },
  { name: "Dragon Flag", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Hanging Knee Raise", equipment: "Bar", bodyPart: "Abs" },
  { name: "Hanging Leg Raise", equipment: "Bar", bodyPart: "Abs" },
  { name: "Hanging Sit-Up", equipment: "Bar", bodyPart: "Abs" },
  { name: "Hanging Windshield Wiper", equipment: "Bar", bodyPart: "Abs" },
  { name: "High to Low Wood Chop with Band", equipment: "Resistance Band", bodyPart: "Abs" },
  { name: "High to Low Wood Chop with Cable", equipment: "Cable", bodyPart: "Abs" },
  { name: "Hollow Hold", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Horizontal Wood Chop with Band", equipment: "Resistance Band", bodyPart: "Abs" },
  { name: "Horizontal Wood Chop with Cable", equipment: "Cable", bodyPart: "Abs" },
  { name: "Jackknife Sit-Up", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Kettlebell Plank Pull Through", equipment: "Kettlebell", bodyPart: "Abs" },
  { name: "Kneeling Ab Wheel Roll-Out", equipment: "Ab Wheel", bodyPart: "Abs" },
  { name: "Kneeling Plank", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Kneeling Side Plank", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "L-Sit", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Lying Leg Raise", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Lying Windshield Wiper", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Lying Windshield Wiper with Bent Knees", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Machine Crunch", equipment: "Machine", bodyPart: "Abs" },
  { name: "Mountain Climbers", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Oblique Crunch", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Oblique Sit-Up", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Plank", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Plank with Leg Lifts", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Side Plank", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Sit-Up", equipment: "Bodyweight", bodyPart: "Abs" },
  { name: "Barbell Standing Calf Raise", equipment: "Barbell", bodyPart: "Calves" },
  { name: "Donkey Calf Raise", equipment: "Machine", bodyPart: "Calves" },
  { name: "Eccentric Heel Drop", equipment: "Bodyweight", bodyPart: "Calves" },
  { name: "Heel Raise", equipment: "Bodyweight", bodyPart: "Calves" },
  { name: "Seated Calf Raise", equipment: "Machine", bodyPart: "Calves" },
  { name: "Standing Calf Raise", equipment: "Machine", bodyPart: "Calves" },
  { name: "Barbell Wrist Curl", equipment: "Barbell", bodyPart: "Forearms" },
  { name: "Barbell Wrist Curl Behind the Back", equipment: "Barbell", bodyPart: "Forearms" },
  { name: "Bar Hang", equipment: "Bar", bodyPart: "Forearms" },
  { name: "Dumbbell Wrist Curl", equipment: "Dumbbell", bodyPart: "Forearms" },
  { name: "Farmers Walk", equipment: "Dumbbell", bodyPart: "Forearms" },
  { name: "Fat Bar Deadlift", equipment: "Barbell", bodyPart: "Forearms" },
  { name: "Gripper", equipment: "Gripper", bodyPart: "Forearms" },
  { name: "One-Handed Bar Hang", equipment: "Bar", bodyPart: "Forearms" },
  { name: "Plate Pinch", equipment: "Weight Plate", bodyPart: "Forearms" },
  { name: "Plate Wrist Curl", equipment: "Weight Plate", bodyPart: "Forearms" },
  { name: "Towel Pull-Up", equipment: "Towel", bodyPart: "Forearms" },
  { name: "Wrist Roller", equipment: "Roller", bodyPart: "Forearms" },
  { name: "Barbell Wrist Extension", equipment: "Barbell", bodyPart: "Forearms" },
  { name: "Dumbbell Wrist Extension", equipment: "Dumbbell", bodyPart: "Forearms" }

  // Går att Lägga till flera övningar här om det behövs.
];

const listContainer = document.getElementById("exercise-list");
const searchInput = document.getElementById("search"); // Hämtar element för övningslista och sökfält

const render = (items) => { // rensar listan och visar övningar i DOM
  listContainer.innerHTML = "";
  items.forEach(ex => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${ex.name} (${ex.equipment})</strong><br>${ex.bodyPart}`;
    listContainer.appendChild(li);
  });// script.js

document.addEventListener("DOMContentLoaded", async function () { // kör kod efter html laddat
  let exercises = [];

document.querySelectorAll(".exercise").forEach((exerciseDiv) => { // Initierar knappar + Lyssnar för varje övning
  const addSetBtn = exerciseDiv.querySelector(".add-set");
  const deleteExerciseBtn = exerciseDiv.querySelector(".delete-exercise");
  const deleteSetBtns = exerciseDiv.querySelectorAll(".delete-set");

  if (addSetBtn) {
    addSetBtn.addEventListener("click", function () { // nytt set-element läggs till dynamiskt
      const newSet = document.createElement("div");
      newSet.className = "set";
      const setCount = exerciseDiv.querySelectorAll(".set").length + 1;
      newSet.innerHTML = `
        <label>Set <span class="set-number">${setCount}</span></label>
        <label>Reps: <input type="number" value="0" /></label>
        <label>Weight (kg): <input type="number" value="0" /></label>
        <button class="delete-set">✖</button>
      `;
      addSetBtn.before(newSet);
      attachDeleteSetListener(newSet.querySelector(".delete-set"));
    });
  }

  if (deleteExerciseBtn) {
    deleteExerciseBtn.addEventListener("click", () => exerciseDiv.remove());
  }

  deleteSetBtns.forEach((btn) => attachDeleteSetListener(btn));
});


  try {
    const res = await fetch("/api/exercises"); // hämtar data asykront
    exercises = await res.json();
    if (!Array.isArray(exercises)) throw new Error("Invalid exercise data");
  } catch (err) {
    console.error("Kunde inte hämta övningar:", err);
    exercises = [];
  }

  const passwordInput = document.getElementById("myInput");
  const checkbox = document.getElementById("showPassword");
  if (checkbox && passwordInput) {
    checkbox.addEventListener("change", function () {
      passwordInput.type = this.checked ? "text" : "password";
    });
  } //visar / döljer lösenord

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", async function (event) { // skickar data till servern vid registrering
      event.preventDefault();
      const email = document.getElementById("first").value;
      const username = document.getElementById("second").value;
      const password = passwordInput.value;

      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, username, password })
        });

        const result = await response.json();
        if (response.ok) {
          alert("Registrering lyckades!");
          window.location.href = "login.html";
        } else {
          alert(result.error || "Något gick fel.");
        }
      } catch (error) {
        console.error("Fel vid registrering:", error);
        alert("Ett tekniskt fel uppstod.");
      }
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async function (event) { // kontrollerar lösenord&email
      event.preventDefault();

      const email = document.getElementById("first").value;
      const password = passwordInput.value;

      try {
        const response = await fetch("/api/users");
        const users = await response.json();

        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          localStorage.setItem("loggedInUser", JSON.stringify(user)); // användare sparas i localStorage
          window.location.href = "../pages/profile.html";
        } else {
          alert("Fel e-post eller lösenord.");
        }
      } catch (error) {
        console.error("Fel vid inloggning:", error);
        alert("Ett tekniskt fel uppstod.");
      }
    });
  }

  const userEmailSpan = document.getElementById("userEmail");
  const userNameSpan = document.getElementById("userName");
  const storedUser = localStorage.getItem("loggedInUser");
  if (storedUser && userEmailSpan && userNameSpan) {
    const user = JSON.parse(storedUser);
    userEmailSpan.textContent = user.email;
    userNameSpan.textContent = user.username;
  }

  const logoutButton = document.getElementById("logoutButton");
  if (logoutButton) {
    logoutButton.addEventListener("click", function () { // ta bort användardatan+gå till login
      localStorage.removeItem("loggedInUser");
      window.location.href = "login.html";
    });
  }

  const metricBtn = document.getElementById("metricButton");
  const imperialBtn = document.getElementById("imperialButton");
  function setActiveUnit(unit) { // Vald enhet för vikt sparas i localStorage
    if (metricBtn && imperialBtn) {
      metricBtn.classList.toggle("active", unit === "metric");
      imperialBtn.classList.toggle("active", unit === "imperial");
      localStorage.setItem("preferredUnit", unit);
    }
  }
  const savedUnit = localStorage.getItem("preferredUnit") || "metric";
  setActiveUnit(savedUnit);
  if (metricBtn && imperialBtn) {
    metricBtn.addEventListener("click", () => setActiveUnit("metric"));
    imperialBtn.addEventListener("click", () => setActiveUnit("imperial"));
  }

const cancelBtn = document.querySelector('.btn.red');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function () {
      window.location.href = "profile.html";
  });
}

  let seconds = 0;
  const timerElement = document.getElementById("timer");
  function updateTimer() {
    seconds++;
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    if (timerElement) timerElement.textContent = `${hrs}:${mins}:${secs}`;
  }
  setInterval(updateTimer, 1000);

  const modal = document.getElementById("exerciseModal");
  const closeButton = document.querySelector(".close-button");
  const exerciseList = document.getElementById("exerciseList");
  const searchInput = document.getElementById("exerciseSearch");
  if (closeButton) closeButton.addEventListener("click", () => modal.classList.add("hidden"));
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderExerciseList(searchInput.value);
    });
  }

  function renderExerciseList(filter) {
    if (!exerciseList || !Array.isArray(exercises)) return;
    exerciseList.innerHTML = "";
    const filtered = exercises.filter(ex =>
      ex.name.toLowerCase().includes(filter.toLowerCase())
    );
    filtered.forEach(exercise => {
      const li = document.createElement("li");
      li.textContent = exercise.name;
      li.addEventListener("click", () => {
        createExerciseElement(exercise);
        modal.classList.add("hidden");
      });
      exerciseList.appendChild(li);
    });
  }

  function createExerciseElement(exercise) {
    const workoutContainer = document.getElementById("workoutContainer");
    if (!workoutContainer) return;
    const div = document.createElement("div");
    div.className = "exercise";
    div.innerHTML = `
      <h3>${exercise.name}</h3>
      <p><strong>Equipment:</strong> ${exercise.equipment}</p>
      <p><strong>Target Muscle:</strong> ${exercise.bodyPart}</p>
      <div class="set">
        <label>Set <span class="set-number">1</span></label>
        <label>Reps: <input type="number" value="0" /></label>
        <label>Weight (kg): <input type="number" value="0" /></label>
        <button class="delete-set">✖</button>
      </div>
      <button class="add-set">+ Add Set</button>
      <button class="delete-exercise">Delete Exercise</button>
    `;
    workoutContainer.appendChild(div);

    div.querySelector(".add-set").addEventListener("click", function () {
      const newSet = document.createElement("div");
      newSet.className = "set";
      const setCount = div.querySelectorAll(".set").length + 1;
      newSet.innerHTML = `
        <label>Set <span class="set-number">${setCount}</span></label>
        <label>Reps: <input type="number" value="0" /></label>
        <label>Weight (kg): <input type="number" value="0" /></label>
        <button class="delete-set">✖</button>
      `;
      div.insertBefore(newSet, this);
      attachDeleteSetListener(newSet.querySelector(".delete-set"));
    });

    div.querySelector(".delete-exercise").addEventListener("click", () => div.remove());
    attachDeleteSetListener(div.querySelector(".delete-set"));
  }

  function attachDeleteSetListener(button) {
    if (button) {
      button.addEventListener("click", function () {
        const exerciseDiv = this.closest(".exercise");
        this.closest(".set").remove();
        updateSetNumbers(exerciseDiv);
      });
    }
  }

  function updateSetNumbers(exerciseDiv) {
    const sets = exerciseDiv.querySelectorAll(".set");
    sets.forEach((set, index) => {
      const numberSpan = set.querySelector(".set-number");
      if (numberSpan) numberSpan.textContent = index + 1;
    });
  }

  const addExerciseBtn = document.querySelector(".btn.blue");
  if (addExerciseBtn) {
    addExerciseBtn.addEventListener("click", function () {
      if (modal) modal.classList.remove("hidden");
      renderExerciseList("");
    });
  }

  const saveBtn = document.querySelector(".btn.green");
  if (saveBtn) {
    saveBtn.addEventListener("click", async function () {
      const workoutContainer = document.getElementById("workoutContainer");
      const exerciseDivs = workoutContainer.querySelectorAll(".exercise");
      const workout = {
        date: new Date().toDateString(),
        exercises: Array.from(exerciseDivs).map(div => {
          const name = div.querySelector("h3").textContent;
          const sets = div.querySelectorAll(".set").length;
          const reps = parseInt(div.querySelector(".set input[type='number']")?.value || 0);
          const weight = parseInt(div.querySelectorAll(".set input[type='number']")[1]?.value || 0);
          return { name, sets, reps, weight };
        })
      };

      const history = JSON.parse(localStorage.getItem("workoutHistory")) || [];
      history.unshift(workout);
      localStorage.setItem("workoutHistory", JSON.stringify(history));

      try {
        const response = await fetch("/api/save-workout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(workout)
        });
        if (response.ok) {
          window.location.href = "history.html"; // Omdirigera till historiksidan utan att spara history
        } else {
          alert("Kunde inte spara till server.");
        }
      } catch (error) {
        console.error("Fel vid sparning:", error);
        alert("Tekniskt fel vid sparning.");
      }
    });
  }


  
  const container = document.getElementById("history-container");
  if (container) {
    const history = JSON.parse(localStorage.getItem("workoutHistory")) || [];
    function renderHistory() {
      container.innerHTML = "";
      history.forEach((workout, index) => {
        const div = document.createElement("div");
        div.className = "workout-entry";
        div.innerHTML = `
          <button class="delete-btn" data-index="${index}">X</button>
          <h2>Workout</h2>
          <p><strong>Status:</strong> Finished | ${workout.date || "Unknown Date"}</p>
          <p><strong>Exercises:</strong></p>
          <ul>
            ${workout.exercises.map(ex => `
              <li><strong>${ex.name}</strong><br>${ex.sets || 0} sets × ${ex.reps || 0} reps × ${ex.weight || 0} kg</li>
            `).join("")}
          </ul>
        `;
        container.appendChild(div);
      });
    }

    container.addEventListener("click", e => {
      if (e.target.classList.contains("delete-btn")) {
        const index = parseInt(e.target.dataset.index);
        history.splice(index, 1);
        localStorage.setItem("workoutHistory", JSON.stringify(history));
        renderHistory();
      }
    });

    renderHistory();
  }

  const historyContainer = document.getElementById("history-container");

  if (historyContainer) {
    try {
      // Hämtar historik från servern
      const response = await fetch("/data/history.json");
      const history = await response.json();

      // Renderar historiken
      renderHistory(history);
    } catch (error) {
      console.error("Kunde inte hämta historik:", error);
      historyContainer.innerHTML = "<p>Det gick inte att ladda historiken.</p>";
    }
  }

  function renderHistory(history) {
    historyContainer.innerHTML = ""; // Rensa tidigare innehåll
    [...history].reverse().forEach((workout, index) => {
      const workoutDiv = document.createElement("div");
      workoutDiv.className = "workout-entry";
      workoutDiv.innerHTML = `
        <h2>Workout ${index + 1}</h2>
        <p><strong>Date:</strong> ${workout.date}</p>
        <ul>
          ${workout.exercises
            .map(
              (exercise) => `
            <li>
              <strong>${exercise.name}</strong>: ${exercise.sets} sets × ${exercise.reps} reps × ${exercise.weight} kg
            </li>
          `
            )
            .join("")}
        </ul>
        <button class="delete-btn" data-index="${index}">X</button>
      `;
      historyContainer.appendChild(workoutDiv);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const historyContainer = document.getElementById("history-container");
    if (!historyContainer) return;

    async function fetchAndRenderHistory() {
      try {
        const response = await fetch("/data/history.json");
        const history = await response.json();
        renderHistory(history);
      } catch (error) {
        historyContainer.innerHTML = "<p>Kunde inte ladda historik.</p>";
      }
    }

    function renderHistory(history) {
      historyContainer.innerHTML = "";
      history.forEach((workout, index) => {
        const workoutDiv = document.createElement("div");
        workoutDiv.className = "workout-entry";
        workoutDiv.innerHTML = `
          <h2>Workout ${index + 1}</h2>
          <p><strong>Date:</strong> ${workout.date || ""}</p>
          <ul>
            ${workout.exercises.map(ex =>
              `<li><strong>${ex.name}</strong>: ${ex.sets} sets × ${ex.reps} reps × ${ex.weight} kg</li>`
            ).join("")}
          </ul>
          <button class="delete-btn" data-index="${index}">X</button>
        `;
        historyContainer.appendChild(workoutDiv);
      });
    }

    historyContainer.addEventListener("click", async (e) => {
      if (e.target.classList.contains("delete-btn")) {
        const index = e.target.dataset.index;
        try {
          const res = await fetch(`/api/delete-workout/${index}`, { method: "DELETE" });
          if (res.ok) {
            fetchAndRenderHistory();
          } else {
            alert("Kunde inte radera passet.");
          }
        } catch (err) {
          alert("Tekniskt fel vid radering.");
        }
      }
    });

    fetchAndRenderHistory();
  });
});

};

render(exercises);

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = exercises.filter(ex => ex.name.toLowerCase().includes(value));
  render(filtered);
});

module.exports = exercises;
