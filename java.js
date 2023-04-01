function authh(){
    var usr = document.getElementById('usr_n').value;
    var pas = document.getElementById('pass').value;
    if (usr == "admin"){
        if(pas == "password"){
            window.location.href = "http://34.222.33.233/Admin_ID=123/";
            alert( "Login as " + usr);
        }
        else{
            alert("Invalid password !");
        }
    }
    else{
        alert("Spoof detected !")
    }
}