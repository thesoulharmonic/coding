let items = [];
fetch("https://api.chucknorris.io/jokes/random")
   .then(res => res.json())
   .then((result) => {
      items = result;
      console.log(items);
      console.log(result.value);
   }),
   (error) => {
      console.log(error);
}

