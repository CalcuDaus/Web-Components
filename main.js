let imageFigureElement = document.querySelector("image-figure");

// jika tidak tersedia maka buat element image-figure
if (!imageFigureElement) {
  let imageFigure = document.createElement("image-figure");
  document.body.appendChild(imageFigure);
}

// mengubah/menambahkan nilai attribute caption
setTimeout(() => {
  imageFigureElement.setAttribute("caption", "tes");
}, 3000);

// menghapus image figure elemen dari DOM
setTimeout(() => {
  imageFigureElement.remove();
}, 6000);


