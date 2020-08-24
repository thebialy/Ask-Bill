console.log("JS file is connected")
// GLOBAL VARIABLES

const activities = ['education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork']

const activityButton = () => {
    for (activity of activities){
        const $activityBTN = $('<button>' + activities[activity] + '</button>').addClass("activity-btn").appendTo('#navBar')
        console.log(activities)
    }
  
}

// EVENT LISTENERS
$('.billHead-btn').on('click', activityButton)