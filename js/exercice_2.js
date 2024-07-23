function exercice_2(){
    let seconds = 0;
    let minutes = 0;
    let chronoText = "";
    let chronoContainer = document.getElementById("chrono");

    if (localStorage.hasOwnProperty("minutes") && localStorage.hasOwnProperty("seconds")) {
        minutes = localStorage.getItem("minutes");
        seconds = localStorage.getItem("seconds");
    }
  
    window.setInterval(count, 1000);
  
    function count() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes += 1;
        }

        chronoText = `${minutes}:${seconds}`;
        chronoContainer.innerText= chronoText;

      if (minutes == 10) {
        document.getElementsByClassName("fa-hourglass")[0].style.color = "red";
      }
    }
}

export default exercice_2;