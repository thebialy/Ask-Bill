console.log("JS file is connected")
// GLOBAL VARIABLES
const $modal = $('#modal')
const $closeBtn = $('#close')
const activities = ['education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork']


// FUNCTIONS
const activityButton = () => {
    $('.billHead-btn').hide()
    $('.headerText').hide()
    $('.billText').hide()
    const $h1 = $('<h1>').text('Bill wants to know what type of activity you are interested in').addClass('activityText').prependTo('.container')
    for (let i = 0; i<activities.length; i++){
        let $activityBTN = $('<button>' + activities[i] + '</button>').attr('id', activities[i]).appendTo('nav')
    }  
}
const openModal = () => {
  $modal.css('display', 'block')
}

const closeModal = () => {
  $modal.css('display', 'none')
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
               $('#activity').text(data.activity);
               if (data.accessibility > 0.5)   {
                    $('#activity').text("difficult")
               } else {
                    $('#accessibility').text("not very difficult")
               }
               $('#type').html(data.type);
               if(data.participants === 1) {
                   $('#participants').text("You can do this solo and doesn't require any friends.")
               } else {
                    $('#participants').text("You need " + data.participants + " friends.")
               }

               if(data.price === 0){
                    $('#price').text("Lucky you, it's completely free!")
               } else if (data.price > 0 && data.price <= 0.5) {
                    $('#price').text("Well you're in luck, it's on the cheaper side of activities.")
               } else {
                    $('#price').text("Unfortunately, this activity is on the more expensive side.")
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
$closeBtn.on("click", closeModal)




// STRETCH
// 1. Have page load with gif playing a song then fades to the main content of the page
// 2. have the modal open up inside a classfied ad news template 