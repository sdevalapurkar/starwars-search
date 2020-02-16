const validLogins = [
    {
        'username': 'user123',
        'password': 'password'
    },
    {
        'username': 'testuser',
        'password': 'mypasswordisawesome'
    },
    {
        'username': 'aaronisdichotomouse',
        'password': 'niceeeee'
    }
];

function loginUser (){
    var usernameData = document.getElementById('username').value;
    var passwordData = document.getElementById('password').value;
    
    // go through the valid logins array and find one that matches the username and password
    // pair that the user typed
    // ex: if user types username as user123 and password as password then they should be authenticated
    // if user types username as user123 and password as niceeeee then no auth
    var isAuthed = false; // flag

    for(var i = 0; i<validLogins.length; i++) {
        var validUsername = validLogins[i].username;
        var validPassword = validLogins[i].password;
        
        if(usernameData === validUsername){
            if(validPassword === passwordData) {
                // go to search screen
                isAuthed = true;
                window.location.href = "search-bar.html";
            }
        }
    }

    if (isAuthed === false) {
        // clear the fields so they can try again
        alert("Wrong credentials, please try again!");
    }
}
