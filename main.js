var $entryButton = document.querySelector('.add-button');
var $addEntrySwitch = document.querySelector('.background-off');

function addEntry(event){
  $addEntrySwitch.className = "background";
}

$entryButton.addEventListener("click", addEntry);

var $submitBtn = document.querySelector('.submit-btn');
var $form = document.querySelector('form');

function submitEntry(event) {
  event.preventDefault();
  var newEntry = {};
  // newEntry.time
  console.log($form.elements.dayofweek.value);

}

$submitBtn.addEventListener("click", submitEntry);
