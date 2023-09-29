// Put code in container using{}
var localeSettings = {};
    dayjs.locale(localeSettings);

// Function to run when DOM is loaded.
    $(function () {
// Using the dayjs library to get current time
var currentHour = dayjs().format('H');
// Function to change background color of each time block based on current hour.
    function blockColour() {
      $('.time-block').each(function() {
        var blockHour = parseInt(this.id);
        console.log(this.id);
        $(this).toggleClass('past', blockHour < currentHour);
        $(this).toggleClass('present', blockHour === currentHour);
        $(this).toggleClass('future', blockHour > currentHour);
      });
    }

// Funtion to collect and save user input
    function userInput() {
      $('.saveBtn').on('click', function() {
        var key = $(this).parent().attr('id');
  var value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
              });
    }

// Function to indicate the color of each time block based on past, present or future. 
     function colourUpdate() {
        $('.time-block').each(function() {
                  var blockHour = parseInt(this.id);
            if (blockHour == currentHour) {
            $(this).removeClass('past future').addClass('present');
          } else if (blockHour < currentHour) {
            $(this).removeClass('future present').addClass('past');
          } else {
            $(this).removeClass('past present').addClass('future');
          }
        });
      }
// Collect user input to show the values for each time block.
      $('.time-block').each(function() {
        var key = $(this).attr('id');
        var value = localStorage.getItem(key);
        $(this).children('.description').val(value);
      });

// Function to display current time of the day.
    function updateTime() {
        var dateElement = $('#date');
        var timeElement = $('#time');
        var currentDate = dayjs().format('dddd, MMMM D, YYYY');
        var currentTime = dayjs().format('hh:mm:ss A');
        dateElement.text(currentDate);
        timeElement.text(currentTime);
      }

// Call the functions
      blockColour(); userInput(); colourUpdate();

// Set clock go go live 
    
      setInterval(updateTime, 1000);
    });