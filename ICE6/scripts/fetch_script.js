console.log("fetch_script.js loaded");

// get the button for xhr
let btn_fetch = $('#FetchJoke');
// create a url variable
let url_xhr = "https://icanhazdadjoke.com/";

//need a header Accept value set to 'application/json'
let myFetchHeader = {"Accept": "application/json"};
// create the callback for the click
$(btn_fetch).click(() => {
    // use fetch
    fetch(url_fetch, {
        // give the necessary header data
        headers: myFetchHeader
    })
    // first then() to recieve the promise
    .then((result) => {
        // send the json from the promise on to the next then()
        return result.json();
        
    })
            // console log the json
            console.log(jsonRes);
            // set the output
});


