const ul = document.getElementsByTagName("ul");
const btnAdd = document.getElementById("btnAdd");
const btnRemove = document.getElementById("btnRemove");
const p = document.getElementsByTagName("p");
const textError = document.getElementById("error-text");
const h3 = document.querySelector(".h3");

// textError.appendChild(h3);
// btnAdd
//   .addEventListener("click", function () {
//     fetch("https://dog.ceo/api/breeds/image/random")
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         let li = document.createElement("li");
//         let img = document.createElement("img");
//         img.src = data.message;
//         li.appendChild(img);
//         ul[0].appendChild(li);
//         p[0].innerHTML = "Number of images: " + ul[0].children.length;
//       });
//   })
//   .catch(error => console.log(error));
//🌧🌧🌧🌧🌧🌧🌧🌧
function prom() {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", "https://dog.ceo/api/breeds/image/random");
    req.onload = () => {
      if (req.status === 200) {
        resolve(req.response);
      }
      if (req.status === 404) {
        reject(`${req.status}: The URL was written incorrectly`);
      } else {
        reject(req.status);
      }
    };
    req.onerror = () => {
      reject(Error("Network Error"));
    };
    req.send();
  });
}
btnAdd.addEventListener("click", function () {
  prom().then(
    response => {
      let data = JSON.parse(response);
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.className = "img";
      img.src = data.message;
      li.appendChild(img);
      ul[0].appendChild(li);
      p[0].innerHTML = "Number of images: " + ul[0].children.length;
    },
    error => {
      console.log();
      h3.textContent = error;
    }
  );
});
//🌧
btnRemove.addEventListener("click", function () {
  if (ul[0].children.length > 0) {
    ul[0].removeChild(ul[0].lastElementChild);
    p[0].innerHTML = "Number of images: " + ul[0].children.length;
  } else {
    h3.textContent = "There are no images to delete";
  }
});
