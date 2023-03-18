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


// Close and expand window






const exitButtons = document.querySelectorAll('.closeWindowBtn');

  // Loop through each exit button and add a click event listener
  exitButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the parent article element and remove it from the DOM
      const article = button.closest('article');
      article.classList.remove('projectAppear');
      article.classList.add('projectDisappear');
    });
  });

const fullScreenBtns = document.querySelectorAll('.fullScreenBtn');

  // Loop through each exit button and add a click event listener
  fullScreenBtns.forEach(button => {
    button.addEventListener('click', () => {
      // Get the parent article element and remove it from the DOM
      const article = button.closest('article');
      if(article.classList.contains('projectnormalSize')){
        article.classList.remove('projectnormalSize');
        article.classList.add('projectFullSize');
      } else {
        article.classList.remove('projectFullSize');
        article.classList.add('projectnormalSize');
      }


  // Toggle the 'fa-expand' and 'fa-compress' classes of the i element inside the size div
  const icon = button.querySelector('i');
  icon.classList.toggle('fa-up-right-and-down-left-from-center');
  icon.classList.toggle('fa-down-left-and-up-right-to-center');
    });
  });


