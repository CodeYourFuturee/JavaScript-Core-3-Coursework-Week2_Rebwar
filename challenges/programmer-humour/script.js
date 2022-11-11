const mainDiv = document.querySelector(".main-div");

fetch(`https://xkcd.now.sh/?comic=latest`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    createImg(data.img);
  })
  .catch(err => (mainDiv.innerText = err));

function createImg(url) {
  const image = document.createElement("img");
  image.src = url;

  mainDiv.appendChild(image);
}
