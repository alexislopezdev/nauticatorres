fetch("http://localhost:1337/api/categories")
  .then((responce) => responce.json())
  .then((data) => {
    let name = data.data[0].attributes.name;
    

    let products = document.getElementById("date");

    products.innerHTML = `${name}`;
  });



  function wrapping(gifts) {
    let papel = "";
    for (let i = 0; i < gifts.length; i++) {
      papel +=  gifts[i] + "<br>";
    }
    return papel;
  }
  
  const gifts = ["cat", "game", "socks"];
  const wrapped = wrapping(gifts);
  
  console.log(wrapped);
