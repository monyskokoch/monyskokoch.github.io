// URLs for all 32 team logos
let logos = [
    'logos/49ers.png',
    'logos/bears.png',
    'logos/bengals.png',
    'logos/bills.png',
    'logos/broncos.png',
    'logos/browns.png',
    'logos/buccs.png',
    'logos/cardinals.png',
    'logos/chargers.png',
    'logos/chiefs.png',
    'logos/colts.png',
    'logos/cowboys.png',
    'logos/dolphins.png',
    'logos/eagles.png',
    'logos/falcons.png',
    'logos/giants.png',
    'logos/jaguars.png',
    'logos/jets.png',
    'logos/lions.png',
    'logos/packers.png',
    'logos/panthers.png',
    'logos/patriots.png',
    'logos/raiders.png',
    'logos/rams.png',
    'logos/ravens.png',
    'logos/saints.png',
    'logos/seahawks.png',
    'logos/steelers.png',
    'logos/texans.png',
    'logos/titans.png',
    'logos/vikings.png',
    'logos/washington.png',
];

// Shuffle logos array
logos.sort(() => Math.random() - 0.5);

// Function to assign logos to .logo elements in HTML
function assignLogos() {
    let logoElements = document.querySelectorAll('.logo');
    for(let i = 0; i < logoElements.length; i++){
        logoElements[i].src = logos[i];
    }
}

// Assign logos on page load
window.onload = assignLogos;

// Function to handle guess submission
function submitGuesses() {
    let gridItems = document.getElementsByClassName('grid-item');
    for(let i = 0; i < gridItems.length; i++){
        console.log(gridItems[i].value);
    }
}
