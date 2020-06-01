window.addEventListener( "load", function() {

    doFetch();
    doFetchAsync();
    
    executeDivisionPromise();
    executeDivisionPromiseAsync();
});

function doFetch(){
    fetch("http://api.github.com/users/zmmarina")
        .then( res => {
            res.json().then( data => { 
                showData(data);
            });
        })      
        .catch( error => {
            console.log("Request error");
        });
}

async function doFetchAsync(){
    const res = await fetch("http://api.github.com/users/zmmarina");
    const json = await res.json();
    console.log(json);
}



function showData (data) {

    const user = document.querySelector("#user");
    user.textContent = data.login + " " + data.name;
}

function divisionPromise( a, b){
    return new Promise( (resolve, reject) => { 
        if (b === 0){
            reject ("It is not possible division by zero");
        }

        resolve (a / b);
    });
}

function executeDivisionPromise(){

    divisionPromise( 12, 6).then( result => {
        console.log( result);
    });

    divisionPromise( 12, 0).then( result => {
        console.log( result);
    })
    .catch( errorMessage => {
        console.log("Division failure" + errorMessage);
    });
}

async function executeDivisionPromiseAsync(){

    const division = await divisionPromise(12, 2);
    console.log(division);    
}