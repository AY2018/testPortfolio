// Error message 

// get the width of the screen
  const screenWidth = window.innerWidth;

  // check if the screen width is less than 968px
  if (screenWidth < 968) {
    // select the element where you want to display the message
    const messageDiv = document.getElementById('error'), header = document.getElementById('header'), main = document.getElementById('main'), footer = document.getElementById('footer'), loader = document.getElementById('loader');

    messageDiv.classList.add("Appear");
    header.classList.add("Disappear");
    main.classList.add("Disappear");
    footer.classList.add("Disappear");
    loader.classList.add("Disappear");
  }

// Time 
function displayTime() {
        var now = new Date();
        var dayNum = now.getDay();
        var dayLetter = now.toLocaleString('default', {weekday: 'short'});
        var dateNum = now.getDate();
        var monthLetter = now.toLocaleString('default', {month: 'short'});
        var hours = now.getHours();
        var minutes = now.getMinutes();

        // add leading zeros to hours and minutes
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        // display the date and time in the HTML element with id="time"
        document.getElementById("time").innerHTML =
          dayLetter + " " + monthLetter + " " + dateNum + " " + hours + ":" + minutes;
      }

      // update the time every minute
      setInterval(displayTime, 60000);

// update the time every second
setInterval(displayTime, 1000);




// -----------------  Ruu
// Ruu 1 

let ruu1 = document.getElementById('ruu1');

function ruuAppear(){
  ruu1.classList.remove('ruuDisappear');
  ruu1.classList.add('ruuAppear');
};

function ruuDisappear(){
  ruu1.classList.remove('ruuAppear');
  ruu1.classList.add('ruuDisappear');
};