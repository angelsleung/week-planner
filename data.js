var planner = [
  {
    day: 'Sunday',
    time: [],
    description: []
  },
  {
    day: 'Monday',
    time: [],
    description: []
  },
  {
    day: 'Tuesday',
    time: [],
    description: []
  },
  {
    day: 'Wednesday',
    time: [],
    description: []
  },
  {
    day: 'Thursday',
    time: [],
    description: []
  },
  {
    day: 'Friday',
    time: [],
    description: []
  },
  {
    day: 'Saturday',
    time: [],
    description: []
  }
];

var previousPlanner = localStorage.getItem('planner-local-storage');

if (previousPlanner !== null) {
  planner = JSON.parse(previousPlanner);
}

function beforeUnload() {
  var plannerJSON = JSON.stringify(planner);
  localStorage.setItem('planner-local-storage', plannerJSON);
}

window.addEventListener('beforeunload', beforeUnload);
