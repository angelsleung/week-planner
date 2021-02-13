var $entryButton = document.querySelector('.add-button');
var $addEntrySwitch = document.querySelector('.background-off');

function addEntry(event) {
  $addEntrySwitch.className = 'background';
}

$entryButton.addEventListener('click', addEntry);

var $submitBtn = document.querySelector('.submit-btn');
var $form = document.querySelector('form');

var $tBody = document.querySelector('tbody');

function submitEntry(event) {
  event.preventDefault();
  var newEntry = {};
  newEntry.dayOfWeek = $form.elements.dayofweek.value;
  newEntry.time = $form.elements.time.value;
  newEntry.description = $form.elements.description.value;
  console.log("newEntry", newEntry);
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
  if(event.target.matches(".day-button")){
  var dayOfWeek = event.target.textContent;
  for (var i = 0; i < planner.length; i++) {
    if (planner[i].day === dayOfWeek) {

      renderEntry(planner[i]);
    }
  }
  }
}

function renderEntry(dayOfWeek) {
  for (var j = 0; j < dayOfWeek.time.length; j++) {
    var tableRow = document.createElement('tr');
    var tableDataTime = document.createElement('td');
    tableDataTime.textContent = dayOfWeek.time[j];
    console.log("dayOfWeek.time[j]);",dayOfWeek.time[j]);

    tableRow.append(tableDataTime);

    var tableDataDescription = document.createElement('td');
    tableDataDescription.textContent = dayOfWeek.description[j];
    console.log("dayOfWeek.description[j]",dayOfWeek.description[j]);

    tableRow.append(tableDataDescription);
    $tBody.append(tableRow);
  }
}
$dayButton.addEventListener('click', handleViewSchedule);
