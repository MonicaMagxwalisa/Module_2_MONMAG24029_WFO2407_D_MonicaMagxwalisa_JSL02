const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value.trim();
    if (workoutInput === "") return;

    const workoutList = document.querySelector('#workoutList');
    const existingWorkouts = workoutList.querySelectorAll('li');

    // Check for duplicates
    let isDuplicate = false;
    existingWorkouts.forEach(workout => {
        if (workout.textContent.trim().toLowerCase() === workoutInput.toLowerCase()) {
            isDuplicate = true;
        }
    });

    if (isDuplicate) {
        alert('This workout has already been added!');
        return;
    }

    // Add new workout
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);

    // Clear the input field after adding the workout
    document.querySelector('#workoutInput').value = '';
};
document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim();
    const goalList = document.querySelector('#goalList');

    const existingGoals = goalList.querySelectorAll('li');

    let isDuplicate = false;
    existingGoals.forEach(goal => {
        if (goal.textContent.trim().toLowerCase() === goalInput.toLowerCase()) {
            isDuplicate = true;
        }
    });

    if (isDuplicate || goalInput === "") {
        alert('This goal has already been added or is empty!');
        return;
    }

    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);

    document.querySelector('#goalInput').value = '';
};
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};
document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};
updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};
document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};
document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);

