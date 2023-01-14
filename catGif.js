
// call api using async function
async function apiFunction() {
    // set variable to fetch API
    let catGif = await fetch("http://thecatapi.com/api/images/get?format=src&type=gif")
    // get response and log it to console
      .then(response => console.log(response.url))
  }
  
  //call function
  apiFunction();

//GIT TEST on testign branch 
  