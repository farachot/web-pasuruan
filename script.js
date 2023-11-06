let listArtikel = document.getElementById("artikel");

async function getDataArtikel() {
  try {
    let respons = await fetch("https://6548e280dd8ebcd4ab23ccc4.mockapi.io/artikel");
    let data = await respons.json();

    console.log(data);

    data.map((item) => {
      let dataArtikel = `
    <div class="artikel">
      <img src="${item.gambar}" alt="" />
        <div>
            <h3>${item.judul}</h3>
            <p>
                ${item.deskripsi}
            </p>
        </div>
    </div>
        `;

      listArtikel.innerHTML += dataArtikel;
    });
  } catch (error) {
    console.log(error);
  }
}

getDataArtikel();
