let state = {
  currentScreen: "screen1"
};

let screens = ["screen1",
  "screen2", 
  "screen3"
  // "screen4", 
  // "screen5",
  // "screen6"
];

let currentScreenIndex = 0;
let nextButton = document.getElementsById('nextButton');
let resetButton = document.getElementById('resetButton');
let screen1 = document.getElementById('screen1');
let screen2 = document.getElementById('screen2');
let screen3 = document.getElementById('screen3');

//make a elementclass name for Next Button to get all screens to functionm.
// let showScreen = screens[currentScreenIndex];

// screens[5];
// screens.forEach((screen, index) => {
//   // console.log('screenindex', screen);
// })

function updateContent() {
  switch (state.currentScreen) {
    case "screen1":
      console.log("display screen 1",);
      break;
    case "screen2": 
      console.log("display screen 2");
      break;
    case "screen3":
      console.log("display screen 3");
      break;
    case "screen4":
      console.log("display screen 4");
      break;
    case "screen5":
      console.log("display screen 5");
      break;
    case "screen6":
      console.log("display screen 6");
      break;
    default:
      console.log("display screen 1",);
      break;    
  }
}


function showScreen() {
  screens.forEach((screen, index) => {
    let screenElement = document.getElementById(screen);
    if (index === currentScreenIndex) {
      screenElement.style.display = 'block';
    } else {
      screenElement.style.display = 'none';
    } 
  });
}


function nextScreen() {
  console.log("NEXT");
  currentScreenIndex++;
  if (currentScreenIndex >= screens.length) {
    currentScreenIndex = 0;
  } else {
    state.currentScreen = screens[currentScreenIndex];
  }

  showScreen();
}

nextButton.addEventListener('click', nextScreen);

function resetScreen () {
  // console.log("Reset current", reset);
  state.currentScreen = 'screen1';
  currentScreenIndex = 0;
  showScreen();
}

resetButton.addEventListener('click', resetScreen);
