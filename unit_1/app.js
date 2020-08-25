console.log("JS file is connected")
// GLOBAL VARIABLES
const $modal = $('#modal')

const activities = ['education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork']

const activityButton = () => {
    $('.billHead-btn').hide()
    $('.headerText').hide()
    $('.billText').hide()
    const $h1 = $('<h1>').text('Bill wants to know what type of activity you are interested in').addClass('activityText').appendTo('.container')
    for (let i = 0; i<activities.length; i++){
        const $activityBTN = $('<button>' + activities[i] + '</button>').addClass("activity-btn").prependTo('nav')
    }  
}
const openModal = () => {
  ('#modal').css('display', 'block')
  ('#modal-textbox').css('display', 'block')
}

$(".activity-btn").on("click", () => {
    openModal()
    const activityChoice = $(".activity-btn").text();
    console.log(activityChoice)

    $.ajax({
           url: "http://www.boredapi.com/api/activity?type=" + activityChoice
       }).then(
           (data)=>{
               $('#activity').html(data.activity);
               $('#accessibility').html(data.accessibility);
               $('#type').html(data.type);
               $('#participants').html(data.participants);
               $('#price').html(data.price)
           },
           ()=>{
               console.log('bad request');
           }
       );
}) 




// EVENT LISTENERS
$('.billHead-btn').on('click', activityButton)



// STRETCH
// 1. Have page load with gif playing a song then fades to the main content of the page
// 2. have modal open up inside a classfied ad news template 