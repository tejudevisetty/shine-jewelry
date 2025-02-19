var registerUser = () => {
    var newUser = {};
    newUser.firstName = $('#r_firstName').val();
    newUser.lastName = $('#r_lastName').val();
    newUser.email = $('#r_email-address').val();
    newUser.password = $('#r_password').val();

    if(newUser.firstName == "" && newUser.lastName == "" && newUser.email == "" && newUser.password == "" ){

        $('#empty-details').show();

    }
    else{

        axios.post("/register/newUser", newUser).then(response => {

            console.log(response.data);
            $('#empty-details').hide();

        
        })
        .catch(error => {
            console.log(error); 
        })

    }

    resetUserRegisterDetails();   
}

function resetUserRegisterDetails(){

    setTimeout(() => {

        var newUser = {};
    newUser.firstName = $('#r_firstName').val("");
    newUser.lastName = $('#r_lastName').val("");
    newUser.email = $('#r_email-address').val("");
    newUser.password = $('#r_password').val("");
    newUser.cnfPassword = $('#r_cnf_password').val("");

    }, 1000);

}

