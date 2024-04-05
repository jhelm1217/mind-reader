// 1st attempt javascript


let state = {
    currentScreen: "firstScreen"
  };
  
  let screens = [
    "firstScreen",
    "secondScreen",
    "thirdScreen",
    "fourthScreen",
    "fifthScreen", 
     "sixthScreen"
  ];
  
  l
  
  function resetScreen () {
    console.log("current")
    state.currentScreen = "firstScreen";
    
  } 
  
  
  function next(){
    screens.forEach(screenId => {
      let screenElement = document.getElementById(screenId);
      if (screenId === state.currentScreen) {
        screenElement.style.display = "block";
      } else {
        screenElement.style.display = "none";
      }
    });
  }
  
   
  const resetButton = document.getElementById('firstScreen');
  resetButton.addEventListener('click', firstScreen);
  
  
  const nextButton = document.getElementById('nextScreen');
  
  function nextScreen() {
    console.log('NEXT SCREEN')
    let currentIndex = screens.indexOf(state.currentScreen);
    console.log("currentIndex", currentIndex)
    if (currentIndex !== -1 && currentIndex < screens.length -1) {
      state.currentScreen = screens[currentIndex + 1];
      console.log("currentScreen", state.currentScreen)
    //   nextScreen(state.currentScreen);
    } 
    next()
  };
  
  nextButton.addEventListener('click', nextScreen);
  
  
  
  
  
  
  // function currentScreen () {
  //   console.log("current")
  //   state.currentScreen = "firstScreen";
  //   updateScreen(state.currentScreen);
  // }
  
  
  
  // let screens = range(0,5);
  
  // function range(first, sixth) {
  //   let screens = []
  //   for (let i = first; i <= sixth; i ++) {
  //     screens.push("screen" + (i+1));
  //   }
  //   return screens;
  // }
  
  
  // let footerButton = document.getElementById('nextScreen');
  // footerButton.addEventListener('click', 'nextScreen');
  
  
  
  
  
  
  
  
  
  // let mainText = document.getElementById('mainText')
  
  // if the screen we are on is 1 then set mainText to text for screen 1
  // mainText.textContent = "I am going to read your mind."
  
  
  