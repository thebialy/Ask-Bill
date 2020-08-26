console.log("JS file is connected")
// GLOBAL VARIABLES
const $modal = $('#modal')
const activities = ['education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork']


// FUNCTIONS
const activityButton = () => {
    $('.billHead-btn').hide()
    $('.headerText').hide()
    $('.billText').hide()
    const $h1 = $('<h1>').text('Bill wants to know what type of activity you are interested in').addClass('activityText').prependTo('.container')
    for (let i = 0; i<activities.length; i++){
        $activityBTN = $('<button>' + activities[i] + '</button>').attr('id', activities[i]).appendTo('nav')
    }  
}
const openModal = () => {
  $modal.css('display', 'block')
}

const handleData = () => { 
    openModal()
    console.log($(event.target))
    event.preventDefault();
    let activityChoice = $(event.target).attr('id');
    console.log(activityChoice)

    $.ajax({
           url: "http://www.boredapi.com/api/activity?type=" + activityChoice
       }).then(
           (data)=>{
               $('#activity').text("How about you " + data.activity);
               $('#accessibility').html(data.accessibility);
               $('#type').html(data.type);
               $('#participants').html(data.participants);
               if(data.price < 0.1){
                    $('#price').text("FREE!!")
               } else {
                    $('#price').text(data.price)
               }
           },
           ()=>{
               console.log('bad request');
           }
       );
}
 



// EVENT LISTENERS
$('.billHead-btn').on('click', activityButton);
$('nav').on("click", "button", handleData)



// STRETCH
// 1. Have page load with gif playing a song then fades to the main content of the page
// 2. have modal open up inside a classfied ad news template 