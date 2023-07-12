// Define an array of team objects with logo and corresponding team names
const teams = [
   { logo: 'logos/49ers.png', name: 'San Francisco 49ers' },
  { logo: 'logos/bears.png', name: 'Chicago Bears' },
  { logo: 'logos/bengals.png', name: 'Cincinnati Bengals' },
  { logo: 'logos/bills.png', name: 'Buffalo Bills' },
  { logo: 'logos/broncos.png', name: 'Denver Broncos' },
  { logo: 'logos/browns.png', name: 'Cleveland Browns' },
  { logo: 'logos/buccs.png', name: 'Tampa Bay Buccaneers' },
  { logo: 'logos/cardinals.png', name: 'Arizona Cardinals' },
  { logo: 'logos/chargers.png', name: 'Los Angeles Chargers' },
  { logo: 'logos/chiefs.png', name: 'Kansas City Chiefs' },
  { logo: 'logos/colts.png', name: 'Indianapolis Colts' },
  { logo: 'logos/cowboys.png', name: 'Dallas Cowboys' },
  { logo: 'logos/dolphins.png', name: 'Miami Dolphins' },
  { logo: 'logos/eagles.png', name: 'Philadelphia Eagles' },
  { logo: 'logos/falcons.png', name: 'Atlanta Falcons' },
  { logo: 'logos/giants.png', name: 'New York Giants' },
  { logo: 'logos/jaguars.png', name: 'Jacksonville Jaguars' },
  { logo: 'logos/jets.png', name: 'New York Jets' },
  { logo: 'logos/lions.png', name: 'Detroit Lions' },
  { logo: 'logos/packers.png', name: 'Green Bay Packers' },
  { logo: 'logos/panthers.png', name: 'Carolina Panthers' },
  { logo: 'logos/patriots.png', name: 'New England Patriots' },
  { logo: 'logos/raiders.png', name: 'Las Vegas Raiders' },
  { logo: 'logos/rams.png', name: 'Los Angeles Rams' },
  { logo: 'logos/ravens.png', name: 'Baltimore Ravens' },
  { logo: 'logos/saints.png', name: 'New Orleans Saints' },
  { logo: 'logos/seahawks.png', name: 'Seattle Seahawks' },
  { logo: 'logos/steelers.png', name: 'Pittsburgh Steelers' },
  { logo: 'logos/texans.png', name: 'Houston Texans' },
  { logo: 'logos/titans.png', name: 'Tennessee Titans' },
  { logo: 'logos/vikings.png', name: 'Minnesota Vikings' },
  { logo: 'logos/washington.png', name: 'Washington Football Team' },
];

// Timer variables
let timerInterval;
let timerStart;
let timerElapsed = 0;

// Start timer
function startTimer() {
  timerStart = Date.now() - timerElapsed;
  timerInterval = setInterval(() => {
    timerElapsed = Date.now() - timerStart;
    document.getElementById('time').textContent = formatTime(timerElapsed);
  }, 1000);
}

// Stop timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Reset timer
function resetTimer() {
  clearInterval(timerInterval);
  timerElapsed = 0;
  document.getElementById('time').textContent = formatTime(timerElapsed);
}

// Format time
function formatTime(time) {
  let hours = Math.floor(time / 3600000);
  let minutes = Math.floor((time % 3600000) / 60000);
  let seconds = Math.floor((time % 60000) / 1000);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to assign logos and team names to cells
function assignTeams() {
  const logoElements = document.querySelectorAll('.logo');
  const gridItems = document.getElementsByClassName('grid-item');
  const numRows = Math.ceil(gridItems.length / 3);

  let teamIndex = 0;
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < 3; col++) {
      const logoElement = logoElements[teamIndex];
      if (logoElement) {
        logoElement.src = teams[row * 3 + col].logo;
        gridItems[teamIndex].setAttribute('data-team-name', teams[row * 3 + col].name);
        teamIndex++;
      }
    }
  }
}

// Assign teams on page load
window.addEventListener('load', assignTeams);

// Function to handle guess submission
async function submitGuesses() {
  const gridItems = document.getElementsByClassName('grid-item');

  for (let i = 0; i < gridItems.length; i++) {
    const playerName = gridItems[i].value.trim();
    const correspondingInputField = gridItems[i];
    const assignedTeamName = correspondingInputField.getAttribute('data-team-name');

    if (playerName !== '') {
      // Perform the verification here based on the playerName and assignedTeamName
      // Compare the player's input with the assigned team name
      // Update the cell's style based on the correctness of the guess
      if (playerName === assignedTeamName) {
        correspondingInputField.style.backgroundColor = 'green';
      } else {
        correspondingInputField.style.backgroundColor = 'red';
      }
    }
  }
}

// Function to clear the cell backgrounds
function clearCellBackgrounds() {
  const gridItems = document.getElementsByClassName('grid-item');

  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.backgroundColor = '';
  }
}

// Handle submit button click
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => {
  clearCellBackgrounds();
  submitGuesses();
});

// Handle timer button click
const timerButton = document.getElementById('timer-button');
timerButton.addEventListener('click', () => {
  if (timerButton.textContent === 'Start') {
    startTimer();
    timerButton.textContent = 'Stop';
  } else {
    stopTimer();
    timerButton.textContent = 'Start';
  }
});

// Handle reset button click
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
  stopTimer();
  resetTimer();
  timerButton.textContent = 'Start';
});

// Function to shuffle the teams
function shuffleTeams() {
  teams.sort(() => Math.random() - 0.5);
  assignTeams();
  clearCellBackgrounds();
}

// Handle shuffle button click
let shuffleButton = document.getElementById('shuffle-button');
shuffleButton.addEventListener('click', shuffleTeams);
}
