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
}

var $dayButton = document.querySelector('.day-buttons-div');

function handleViewSchedule(event) {
  var dayOfWeek = event.target.textContent;
  for (var i = 0; i < planner.length; i++) {
    if (planner[i].day === dayOfWeek) {
      renderEntry(planner[i]);
    }
  }
  console.log(event.target.textContent);
}

function renderEntry(dayOfWeek) {

  var tableRow = document.createElement('tr');
  var tableDataTime = document.createElement('td');
  tableRow.append(tableDataTime);

  var tableDataDescription = document.createElement('td');
  tableRow.append(tableDataDescription);
}

$dayButton.addEventListener('click', handleViewSchedule);
