var $entryButton = document.querySelector('.add-button');
var $addEntrySwitch = document.querySelector('.background-off');

function addEntry(event) {
  $addEntrySwitch.className = 'background';
}

$entryButton.addEventListener('click', addEntry);

var $submitBtn = document.querySelector('.submit-btn');
var $form = document.querySelector('form');

function submitEntry(event) {
  event.preventDefault();
  var newEntry = {};
  newEntry.dayOfWeek = $form.elements.dayofweek.value;
  newEntry.time = $form.elements.time.value;
  newEntry.description = $form.elements.description.value;
  // newEntry.time
  // console.log(newEntry);
  // planner.push(newEntry);
  checkDay(newEntry);
  $addEntrySwitch.className = 'background-off';
  $form.reset();
}

$submitBtn.addEventListener('click', submitEntry);

function checkDay(day) {
  for (var i = 0; i < planner.length; i++) {
    if (planner[i].day === day.dayOfWeek) {
      planner[i].time.push(day.time);
      planner[i].description.push(day.description);
    }
  }
};
