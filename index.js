fetch("http://localhost:1337/api/categories")
  .then((responce) => responce.json())
  .then((data) => {
    let name = data.data[0].attributes.name;

    let products = document.getElementById("date");

    products.innerHTML = `${name}`;
  });
