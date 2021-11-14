function clickCounter() {
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }