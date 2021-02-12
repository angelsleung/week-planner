var $entryButton = document.querySelector('.add-button');
var $addEntrySwitch = document.querySelector('.background-off');
var $dayOfWeek = document.querySelector('.day-of-week');
var

function addEntry(event){
  $addEntrySwitch.className = "background";

}

$entryButton.addEventListener("click", addEntry);
