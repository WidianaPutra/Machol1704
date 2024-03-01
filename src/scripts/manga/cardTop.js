let page = 1;
const root = document.getElementById("root");

// fetch data
async function fetchData() {
  const url = `https://api.jikan.moe/v4/top/manga?page=${page}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

//render data
async function renderData() {
  const datas = await fetchData();

  datas.forEach((result) => {
    const container = document.createElement("div");
    const imgContaier = document.createElement("div");
    const image = document.createElement("img");
    const h3 = document.createElement("h3");

    container.classList.add("card");
    imgContaier.classList.add("img");
    image.src = result.images.webp.image_url;
    h3.textContent = result.title;

    imgContaier.appendChild(image);
    container.appendChild(imgContaier);
    container.appendChild(h3);
    root.appendChild(container);
  });
}

// prev page
document.getElementById("plus").addEventListener("click", () => {
  page += 1;
  root.innerHTML = "";
  document.getElementById("page").innerHTML = page;
  renderData();
  location.href = "#anime";
  scrollTo({ top: 0, behavior: "smooth" });
});

// next page
document.getElementById("min").addEventListener("click", () => {
  page -= 1;
  root.innerHTML = "";
  page === 0 ? (page = 1) : null;
  document.getElementById("page").innerHTML = page;
  renderData();
  location.href = "#anime";
  scrollTo({ top: 0, behavior: "smooth" });
});

renderData();
