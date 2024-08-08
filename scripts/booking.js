/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35; // initialize daily rate to $35
let daysSelected = 0; // initialize days selected to 0
let calculatedCost = 0; // initialize calculated cost to 0
const mondayBtn = document.getElementById('monday');
const tuesdayBtn = document.getElementById('tuesday');
const wednesdayBtn = document.getElementById('wednesday');
const thursdayBtn = document.getElementById('thursday');
const fridayBtn = document.getElementById('friday');
const halfDayBtn = document.getElementById('half');
const fullDayBtn = document.getElementById('full');
const clearBtn = document.getElementById('clear-button');
const calculatedCostDisplay = document.getElementById('calculated-cost');



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function toggleDayButton(btn) {
    if (!btn.classList.contains('clicked')) {
    btn.classList.add('clicked');
    daysSelected++;
    } else {
    btn.classList.remove('clicked');
    daysSelected--;
    }
    calculateCost();
    }

mondayBtn.addEventListener('click', () => toggleDayButton(mondayBtn));
tuesdayBtn.addEventListener('click', () => toggleDayButton(tuesdayBtn));
wednesdayBtn.addEventListener('click', () => toggleDayButton(wednesdayBtn));
thursdayBtn.addEventListener('click', () => toggleDayButton(thursdayBtn));
fridayBtn.addEventListener('click', () => toggleDayButton(fridayBtn));
    
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearBtn.addEventListener('click', () => {
    mondayBtn.classList.remove('clicked');
    tuesdayBtn.classList.remove('clicked');
    wednesdayBtn.classList.remove('clicked');
    thursdayBtn.classList.remove('clicked');
    fridayBtn.classList.remove('clicked');
    daysSelected = 0;
    calculatedCost = 0;
    calculatedCostDisplay.textContent = '$0';
  });
  

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayBtn.addEventListener('click', () => {
    dailyRate = 20;
    halfDayBtn.classList.add('clicked');
    fullDayBtn.classList.remove('clicked');
    calculateCost();
  });
  
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayBtn.addEventListener('click', () => {
    dailyRate = 35;
    fullDayBtn.classList.add('clicked');
    halfDayBtn.classList.remove('clicked');
    calculateCost();
    });    

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    calculatedCost = daysSelected * dailyRate;
    calculatedCostDisplay.textContent = `${calculatedCost}`;
  }
    