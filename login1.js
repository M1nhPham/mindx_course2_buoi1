function buttonclick() {
    var username = document.getElementById('name').value;
    var pass = document.getElementById('password').value;


    if (username == ""||pass == "") {
        alert("All information must be filled in");
        return;
    }


    

    else {
        alert("Succeeded!")
    //location.href = ''
    }
}

function unavailable() {
    alert("N/A")
}

function darkthemetoggle() {
    document.body.classList.toggle("dark-theme-toggle")
}