  // Put code in container using{}
  var localeSettings = {};
  dayjs.locale(localeSettings);
  // Function to run when DOM is loaded.
  $(function () {
        // Using the dayjs library to get current time
    var currentHour = dayjs().format('H');
  // Function to change background color of each time block based on current hour.
    function hourlyColor() {
      $('.time-block').each(function() {
        var blockHour = parseInt(this.id);
        $(this).toggleClass('past', blockHour < currentHour);
        $(this).toggleClass('present', blockHour === currentHour);
        $(this).toggleClass('future', blockHour > currentHour);
      });
    }})