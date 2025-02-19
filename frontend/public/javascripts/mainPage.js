document.addEventListener('DOMContentLoaded' , () => {
    loadPages();
})

function loadPages(){

    axios.get('/templates/header.htm').then(response => {

        document.getElementById('header-part').innerHTML = response.data;

    })    


    axios.get('/templates/footer.htm').then(response => {
        document.getElementById('footer-part').innerHTML = response.data;
    })
 
}

//search function

 function searchJewelry(){

    const input = $('.search-input').val();
    resetSearchData();

    navigateTo(`${input}`);

 }

 function resetSearchData(){
    $('.search-input').val("");
 }

 //contact information

 function sendMessage(){

    var contactDetails = {};
    contactDetails.name = $('#contact-name').val();
    contactDetails.email = $('#contact-email').val();
    contactDetails.msg = $('#contact-message').val();

    axios.post('/get/contactInfo', contactDetails).then(response => {

        console.log(response.data);
        
    }).catch(error => {
        console.log(error);
    })
    resetContactData();
 }

 function resetContactData(){

    var contactDetails = {};
    contactDetails.name = $('#contact-name').val("");
    contactDetails.email = $('#contact-email').val("");
    contactDetails.msg = $('#contact-message').val("");

 } 

 //generating otp

 function optFunction(){

    const phone =  $('.otp-input').val();
    if(phone.length === 10){
        $('.otp-input').val("");
        alert("OTP sent successfully");

    }
    else{
        $('.otp-input').val("");

        alert("Enter valid number");

    }
 }

 




