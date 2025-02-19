// document.addEventListener('DOMContentLoaded', () => {

//     document.getElementById('register_account').addEventListener('click', function () {
//         // Close the login offcanvas manually
//         var loginOffcanvasElement = document.getElementById('offcanvasRight');
//         var loginOffcanvasInstance = bootstrap.Offcanvas.getInstance(loginOffcanvasElement);
    
//         if (loginOffcanvasInstance) {
//             loginOffcanvasInstance.hide(); // Close offcanvas
//         }
    
//         // Open the register modal automatically
//         var registerModal = new bootstrap.Modal(document.getElementById('register_modal'));
//         registerModal.show();
//     });    

// })


//reading user details entered in login form 

var readUserDetails = () => {

    var userLoginDetails = {};

    userLoginDetails.email = $("#l_email-address").val();
    userLoginDetails.password = $("#l_password").val();

    axios.post('/login/credentials', userLoginDetails).then((response) => {

        if(response.data.msg == "fail"){

            $('#wrong_details').show();
        }
        else {
            $('#wrong_details').hide();
            resetAllData();
        }
    })
}

function resetAllData(){
    setTimeout(() => {

        var userLoginDetails = {};
        userLoginDetails.email = $("#l_email-address").val("");
        userLoginDetails.password = $("#l_password").val("");

    },100);

}


    