window.addEventListener( "load", function() {

    fetch("http://api.github.com/users/zmmarina")
    .then( res => {res.json()
        .then( data => { showData(data);
    });
});

});

function showData (data) {

    const user = document.querySelector("#user");
    user.textContent = data.login + " " + data.name;
}

