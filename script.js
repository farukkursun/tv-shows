// json dosyasinin fetch ile getirilmesi

const getir = () => {
  fetch("./tv-shows.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("hata var");
      }
      return res.json();
    })
    .then((data) => bastir(data));
};

getir();

const bastir = (data) => {
  const filmler = document.querySelector(".filmler");
  data.forEach((user) => {
    filmler.innerHTML += `
    <div class=" container text-center card" style="width: 18rem;">
  <img src= ${user.show.image.original} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${user.show.name}</h5>
    <p class="card-text"></p>
    <a href="${user.show.url}" class="btn btn-primary">Detaylar</a>
  </div>
</div>

`;
  });
};
