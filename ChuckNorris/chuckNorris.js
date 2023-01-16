let items = [];
//const jokeHolder = document.getElementById('jokeHolder');
const jokeHolder = document.querySelector('#jokeHolder');


fetch("https://api.chucknorris.io/jokes/random")
   .then(res => res.json())
   .then((result) => {
      items = result;
      //console.log(items);
      jokeHolder.innerHTML = (result.value)
      console.log(result.value);
   }),
   (error) => {
      console.log(error);
}

